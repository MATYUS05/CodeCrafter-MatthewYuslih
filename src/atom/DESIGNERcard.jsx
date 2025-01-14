import AnimationWrapper from "../components/AnimationWrapper";
import CardTeam from "./CardTeam";

const DESIGNERcard = () => {
  return (
    <AnimationWrapper>
      <div className="bg-sky-950 flex flex-col items-center text-center gap-6 py-12">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-white mb-10">Our Designer Team</h2>
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-16 w-full relative">
          {/* Card 1 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=1"
            altText="Team Member 1"
            title="John Doe"
            description="A Front-End Designer specializing in creating aesthetic and responsive user interfaces using HTML, CSS, and JavaScript. Focused on delivering optimal user experiences."
          />

          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=5"
            altText="Team Member 2"
            title="Jane Smith"
            description="A UI/UX Designer with expertise in user research, wireframing, and prototyping. Dedicated to designing intuitive and visually appealing user experiences."
            className="md:-translate-y-10"
          />

          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=7"
            altText="Team Member 3"
            title="Alex Brown"
            description="A Graphic Designer experienced in creating visual assets, branding, and design systems. Skilled in tools like Adobe Creative Suite and Figma."
          />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default DESIGNERcard;
