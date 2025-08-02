export function IntentionSection() {
  return (
    <section className="min-h-screen bg-[#031632] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main heading */}
        <h2 className="text-orange-400 text-3xl md:text-4xl font-bold text-center mb-12">
          Know our Intention
        </h2>

        {/* Vision card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
          <h3 className="text-orange-400 text-2xl md:text-3xl font-bold text-center mb-6">
            Our Vision
          </h3>
          <p className="text-white text-lg md:text-xl leading-relaxed text-center">
            To become Africa's leading grassroots-driven technology and
            innovation summit—bridging the gap between emerging talents and
            global opportunities by empowering individuals and communities
            through tech, entrepreneurship, and collaboration.
          </p>
        </div>

        {/* Mission card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h3 className="text-orange-400 text-2xl md:text-3xl font-bold text-center mb-6">
            Our Mission
          </h3>
          <div className="text-white text-lg md:text-xl leading-relaxed text-center space-y-4">
            <p>
              Foster innovation, creativity, and entrepreneurship by showcasing
              emerging technologies and ideas
            </p>
            <p>
              Connect startups, tech enthusiasts, ecosystem builders, and
              industry leaders for knowledge exchange and networking.
            </p>
            <p>
              Equip young people with the tools, mentorship, and visibility
              needed to solve real-world problems through technology
            </p>
            <p>
              Drive inclusive digital transformation that elevates the
              socioeconomic potential of underserved regions, starting with
              Nnewi and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};