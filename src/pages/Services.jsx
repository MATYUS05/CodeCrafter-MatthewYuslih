import {
  FaMobileAlt,
  FaCar,
  FaLaptopCode,
  FaGlobe,
  FaCogs,
} from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import Card from "../components/Card";
import AnimationWrapper from "../components/AnimationWrapper";
import OurClients from "../atom/Client.jsx";

const Services = () => {
  const services = [
    {
      icon: <FaMobileAlt />, // Ikon untuk Mobile Development
      title: "Mobile Development",
      description:
        "Building modern mobile applications requires a blend of innovative design, efficient coding practices, and an understanding of user experience across various platforms.",
    },
    {
      icon: <FaCar />, // Ikon untuk Mobility Services
      title: "Mobility Services",
      description:
        "Enhancing user mobility solutions through innovative technologies and advanced strategies.",
    },
    {
      icon: <FaLaptopCode />, // Ikon untuk Software Consulting
      title: "Software Consulting",
      description:
        "Providing expert software consultancy to help clients achieve efficiency and effectiveness in their technology strategies.",
    },
    {
      icon: <FaGlobe />, // Ikon untuk Web Development
      title: "Web Development",
      description:
        "Crafting responsive and modern websites designed to enhance user experience and business visibility.",
    },
    {
      icon: <FaCogs />, // Ikon untuk DevOps Services
      title: "DevOps Services",
      description:
        "Streamlining development and operations processes to improve team collaboration and accelerate product delivery.",
    },
    {
      icon: <AiOutlineRobot />, // Ikon untuk AI Solutions
      title: "AI Solutions",
      description:
        "Building intelligent systems powered by AI to enhance productivity and drive innovation in businesses.",
    },
  ];

  return (
    <AnimationWrapper>
      <div className="container mx-auto py-16 px-4 md:px-16 mt-10 h-full">
        {/* Judul section */}
        <h1 className="text-4xl font-bold text-center mb-12 text-sky-600">
          Our Services
        </h1>

        {/* Grid layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        {/* Our Clients Section */}
        <div className="mt-16">
          <OurClients />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Services;
