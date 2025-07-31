import { SponsorForm } from "../components/SponsorForm";

export default function App() {
  return (
    <>
      <div className="relative min-h-screen bg-brand-dark bg-wavy-pattern bg-repeat-x overflow-x-hidden">
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
                Be a Sponsor at Download{" "}
                <span className="text-orange-400">2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Support Innovation. Empower Youth. Build the
                <br />
                Future.
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
                  Download 2025 is not just a tech event — it's a movement to
                  ignite innovation, connect brilliant minds, and shape the
                  future of Africa's tech ecosystem starting from{" "}
                  <span className="font-semibold text-orange-300">Nnewi</span>.
                </p>

                <p>
                  Sponsoring Download 2025 is more than visibility—it's a chance
                  to align your brand with Africa's grassroot innovation,
                  digital creators, and tech disruptors. From powerful
                  storytelling to immersive innovation, Download connects your
                  brand and positions your organization at the heart of Africa's
                  digital future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Partner with Us" Form Section */}
      <SponsorForm />
    </>
  );
}
