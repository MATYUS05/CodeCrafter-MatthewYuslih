import AnimationWrapper from "../components/AnimationWrapper";
import CardTeam from "./CardTeam";

const FRONTENDcard = () => {
  return (
    <AnimationWrapper>
      <div className="bg-gradient-to-b from-white from-5% to-sky-950 flex flex-col items-center text-center gap-6 py-12">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-sky-600 mb-10">Our Frontend Team</h2>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-10 w-full relative">
          {/* Card 1 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=8" // Gambar acak orang
            altText="Frontend Development"
            title="Warren Smith"
            description="Creating stunning user interfaces for web and mobile platforms."
          />

          {/* Card 2 (Middle Card - Elevated) */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=10" // Gambar acak orang
            altText="UI/UX Design"
            title="Sarah Amanda"
            description="Designing intuitive and user-friendly experiences for all users."
            className="relative z-10 md:-translate-y-10"
          />

          {/* Card 3 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=12" // Gambar acak orang
            altText="Frontend Performance"
            title="Will Rock"
            description="Optimizing frontend performance for fast and efficient applications."
          />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default FRONTENDcard;
