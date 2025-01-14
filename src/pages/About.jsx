import AnimationWrapper from "../components/AnimationWrapper";
import CEOcard from "../atom/CEOcard";
import FRONTENDcard from "../atom/FRONTENDcard";
import BACKENDcard from "../atom/BACKENDcard";
import DESIGNERcard from "../atom/DESIGNERcard";

const About = () => {
  return (
    <AnimationWrapper>
      <div className="flex flex-col items-center justify-center mx-auto py-16 px-4 w-full h-full text-center mt-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-sky-600">
            Discover More About Us
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a dynamic web development company driven by an unwavering
            commitment to digital innovation and excellence, delivering
            cutting-edge websites that transform your online presence. Our
            dedicated team of developers and designers combines years of
            industry experience with fresh perspectives to create exceptional
            digital solutions that exceed client expectations.
          </p>
        </section>

        {/* Meet Our Team Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-sky-600">
            Meet Our Team
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Introducing the members who make up our dynamic team, showcasing
            their unique skills and contributions that drive our organization's
            success.
          </p>
        </section>
      </div>
      {/* CEO Card Section */}
      <CEOcard />
      <FRONTENDcard />
      <BACKENDcard />
      <DESIGNERcard />
    </AnimationWrapper>
  );
};

export default About;
