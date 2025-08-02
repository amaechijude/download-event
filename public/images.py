import os
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import List

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(ROOT_DIR, "public")
MAX_RETRIES = 3
WEBP_QUALITY = "50"
COMPRESSION_LEVEL = "6"
IMAGE_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"]

os.makedirs(OUTPUT_DIR, exist_ok=True)


def get_image_paths(root: str) -> List[str]:
    image_paths = []
    for dirpath, _, filenames in os.walk(root):
        for filename in filenames:
            if filename.lower().endswith(tuple(IMAGE_EXTENSIONS)):
                full_path = os.path.relpath(os.path.join(dirpath, filename), root)
                image_paths.append(full_path.replace("\\", "/"))
    return image_paths

def compress_webp(image_rel_path: str) -> None:
    input_path = os.path.join(ROOT_DIR, image_rel_path)
    output_rel_path = os.path.splitext(image_rel_path)[0] + ".png"
    output_path = os.path.join(OUTPUT_DIR, output_rel_path)

    # Preserve folder structure
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    cmd = [
        "ffmpeg",
        "-y",  # Overwrite without prompt
        "-i", input_path,
        "-vcodec", "libwebp",
        "-lossless", "0",  # lossy compression
        "-q:v", WEBP_QUALITY,
        "-compression_level", COMPRESSION_LEVEL,
        output_path
    ]

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return
        except subprocess.CalledProcessError as e:
            if attempt == MAX_RETRIES:
                with open("failed_to_convert.txt", "a") as f:
                    f.write(f"Failed after {MAX_RETRIES} tries: {input_path}\n")
                return

def main():
    image_paths = get_image_paths(ROOT_DIR)
    if not image_paths:
        print("No WebP images found.")
        return

    max_workers = min(4, os.cpu_count() or 2)
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [executor.submit(compress_webp, path) for path in image_paths]
        for future in as_completed(futures):
            future.result()

if __name__ == "__main__":
    main()
