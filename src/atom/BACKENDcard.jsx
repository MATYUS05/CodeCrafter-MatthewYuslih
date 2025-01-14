import AnimationWrapper from "../components/AnimationWrapper";
import CardTeam from "./CardTeam";

const BACKENDcard = () => {
  return (
    <AnimationWrapper>
      <div className="flex flex-col items-center text-center gap-6 py-12 bg-sky-950 text-white">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-white ">Our Backend Team</h2>
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-16 w-full relative mt-10">
          {/* Card 1 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=13" // Random face 1
            altText="John Long - Backend Developer"
            title="John Long"
            description="An experienced backend developer with deep expertise in Node.js, database design, and server-side optimization. Skilled in building robust backend systems to handle high-performance applications."
          />

          {/* Card 2 (Middle Card - Elevated) */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=15" // Random face 2
            altText="Michael Lee - Backend Specialist"
            title="Michael Lee"
            description="A backend specialist with a strong focus on designing scalable architectures and integrating cloud services like AWS and Azure. Proficient in microservices and distributed systems."
            className="relative z-10 md:-translate-y-10"
          />

          {/* Card 3 */}
          <CardTeam
            imageSrc="https://i.pravatar.cc/300?img=19" // Random face 3
            altText="Sarah Parker - API Engineer"
            title="Sarah Parker"
            description="An API engineer with a passion for creating secure, efficient, and scalable APIs. Experienced in RESTful and GraphQL API development, and committed to delivering seamless integrations."
          />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default BACKENDcard;
