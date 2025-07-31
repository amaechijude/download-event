import { Button } from "../ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-medium mb-4">Participate</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Sell your Brand at Download 2025
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          {/* Showcase Section */}
          <ParticipationCard
            title="Showcase Your Product at Download 2025"
            description="Put your innovation in the spotlight where tech meets opportunity — connect, demo, and grow at Nigeria's boldest digital stage."
            buttonText="Learn More"
            image={
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop&crop=center"
            }
            alt="Professional working on laptop with branding content"
            imageLeft={true}
          />

          {/* Speaking Section */}
          <ParticipationCard
            title="Interested in Speaking at Download 2025?"
            description="Share your voice, inspire minds, and lead the digital conversation at one of Nigeria's most forward-thinking tech gatherings."
            buttonText="Submit a Pitch"
            image={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=face"
            }
            alt="Confident speaker presenting to audience"
            imageLeft={false}
          />

          {/* Startup Section */}
          <ParticipationCard
            title="Do you have an Innovative Start?"
            description="Got a game-changing idea? This is your chance to share it, get noticed, and connect with the right people who can help bring it to life."
            buttonText="Pitch it here"
            image={
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop&crop=center"
            }
            alt="Business professionals collaborating and shaking hands"
            imageLeft={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

interface ParticipationCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  alt: string;
  imageLeft?: boolean;
}

const ParticipationCard = ({
  title,
  description,
  buttonText,
  image,
  alt,
  imageLeft = true,
}: ParticipationCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 items-center`}
    >
      <div className="flex-1">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-foreground/90 text-lg mb-6 leading-relaxed">
          {description}
        </p>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-xl">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
