import { Separator } from "./ui/separator";
import { SocialIconsLucidReact } from "./SocilaIcons";

export const Footer2 = () => {
  return (
    <footer className="bg-[#031632] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-4 left-16 text-white opacity-60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className="absolute top-64 right-32 text-white opacity-40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-20 text-white opacity-30">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Header section */}
        <div className="flex justify-between items-start mb-16">
          {/* Logo and description */}
          <div className="max-w-md">
            <div className="flex items-center mb-6">
              <a href="/">
                <img className="w-[212px] h-[74px]" alt="Logo" src="/logo.png" />
                </a>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Download is a forward-thinking annual conference that brings
              together bold minds, innovators, and digital leaders to explore
              how technology, media, and strategy can accelerate business
              growth, amplify brands, and shape the future.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4 mt-6">
              {/* <SocialIconsSvg /> */}
              <SocialIconsLucidReact />
            </div>

          </div>

          {/* Navigation columns */}
          <div className="flex space-x-24">
            <div>
              <h3 className="text-xl font-bold mb-8">EXPLORE</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8">EXPLORE</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sponsors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Volunteers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Tagline */}
        <div className="text-center my-16">
          <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[64px] tracking-[0] leading-[normal]">
            Dream, Develop, Dominate.
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* Terms and Privacy */}
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-xl tracking-[-0.22px] leading-[30px] hover:underline"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-xl tracking-[-0.22px] leading-[30px] hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          <Separator className="w-full" />

          {/* Copyright */}
          <div className="flex justify-center items-center gap-1">
            <span className="[font-family:'Lato',Helvetica] font-light text-white text-base tracking-[-0.18px] leading-6">
              ICE HUB &copy;{" "}
            </span>
            <span className="[font-family:'Lato',Helvetica] font-light text-white text-base tracking-[-0.18px] leading-6">
              {new Date().getFullYear()}. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
