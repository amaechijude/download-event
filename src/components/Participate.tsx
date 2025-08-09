
interface DownloadSection {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

export const Participate = () => {
  const sections: DownloadSection[] = [
    {
      id: "showcase",
      title: "Showcase Your Product at Download 2025",
      description:
        "Put your innovation in the spotlight where tech meets opportunity — connect, demo, and grow at Nigeria's boldest digital stage.",
      buttonText: "Learn More",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center",
    },
    {
      id: "speaking",
      title: "Interested in Speaking at Download 2025?",
      description:
        "Share your voice, inspire minds, and lead the digital conversation at one of Nigeria's most forward-thinking tech gatherings.",
      buttonText: "Submit a Pitch",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=face",
    },
    {
      id: "startup",
      title: "Do you have an Innovative Start?",
      description:
        "Got a game-changing idea? This is your chance to share it, get noticed, and connect with the right people who can help bring it to life.",
      buttonText: "Pitch it here",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <div className="min-h-screen bg-[#031632] text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Participate
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Sell your Brand at Download 2025
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {section.description}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  {section.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20"></div>
      </div>
    </div>
  );
};
