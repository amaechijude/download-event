
export default function Volunteer() {
  return (
    <>
      <div className="relative bg-[#031632] overflow-x-hidden">
        <img
          src="/sponsor-bg.png"
          alt="Background Pattern"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center">
          {/* Header Section */}
          <header className="mb-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Be a Volunteer at Download{" "}
                <span className="text-orange-400">2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Join the team that powers innovation - gain experience, make
                connections,
                <br />
                and be part of the movement shaping the future of tech.
              </p>
            </div>
          </header>

          {/* "What You Should Know" Section */}
          <div className="max-w-4xl w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-8 text-center">
                What You Should Know
              </h2>

              <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed">
                <p>
                  Download 2025 is more than a tech event - it's a movement to
                  ignite innovation, connect brilliant minds, and shape Africa's
                  tech future starting from{" "}
                  <span className="font-semibold text-orange-300">Nnewi</span>.
                </p>

                <p>
                  As a volunteer, you'll be at the heart of the action - helping
                  bring ideas to life, supporting creators and innovators, and
                  driving experiences that inspire change. You won't just be
                  giving your time; you'll be building connections, gaining
                  skills, and playing a key role in positioning Nnewi at the
                  forefront of Africa's digital revolution.
                </p>
                <p>Be part of something bigger. Join us.</p>
              </div>
            </div>
          </div>

          {/* Volunteer Button */}
          <button className="mt-12 px-8 py-4 bg-orange-400 text-white text-xl font-semibold rounded-full hover:bg-orange-500 transition-colors">
            Be a Volunteer
          </button>
        </div>
      </div>
    </>
  );
}
