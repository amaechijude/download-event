
interface TeamMember {
  name: string;
  title: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Isaac C Emeti",
    title: "(Convener)",
    image: "/isaac.png",
    alt: "Mr. Isaac C Emeti, Convener of Download 2025"
  },
  {
    name: "Mrs. Chiamaka Emeti", 
    title: "(Co-convener)",
    image: "/chammy.png",
    alt: "Mrs. Chiamaka Emeti, Co-convener of Download 2025"
  }
];

export const TeamSection = () => {
  return (
    <div className="py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-lg font-medium mb-4">Meet the Team</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 max-w-4xl mx-auto">
          Get to know the brilliant minds driving our Vision forward.
        </h2>
      </div>

      {/* Team Members Grid */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 text-center w-full md:w-80`}
          >
            <img
              src={member.image}
              alt={member.alt}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
