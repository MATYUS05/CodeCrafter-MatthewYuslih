import AnimationWrapper from "../components/AnimationWrapper";
import CardTeam from "./CardTeam";

const CEOcard = () => {
  return (
    <AnimationWrapper>
      <div className="flex flex-col items-center text-center gap-6 py-12 -mt-16">
        <h2 className="text-4xl font-bold text-sky-600 mb-10">Our Founder</h2>
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-16 w-full relative">
          {/* Card 1 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=59"
            altText="John Doe - Founder"
            title="John Doe"
            description="Co-founder of our company, driving growth through strategic planning and innovation."
          />

          {/* Card 2 (Middle Card - Elevated) */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=44"
            altText="Jane Smith - Co-founder"
            title="Jane Smith"
            description="Founder of our company, dedicated to leading innovative solutions and long-term success."
            className="relative z-10 md:-translate-y-10"
          />

          {/* Card 3 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=54"
            altText="Bob Johnson - Co-founder"
            title="Bob Johnson"
            description="Co-founder of our company, driving growth through strategic planning and innovation."
          />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default CEOcard;
