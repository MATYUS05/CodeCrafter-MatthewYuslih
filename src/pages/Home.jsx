import AnimationWrapper from "../components/AnimationWrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Gambar1 from "../img/gambar3.jpg";

const Home = () => {
  return (
    <AnimationWrapper>
      <div className="flex items-center justify-center min-h-screen w-full p-6">
        {/* Container untuk tulisan dan gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full max-w-6xl">
          {/* Gambar */}
          <div className="flex justify-center md:order-last mt-24 md:mt-0">
            <motion.img
              src={Gambar1}
              alt="Our Company"
              className="max-w-full h-auto rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>

          {/* Tulisan */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">
              CodeCrafters
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              We provide innovative solutions to help you achieve your goals.
              Join us in building a brighter tomorrow.
            </p>
            <div className="flex flex-col items-center md:items-start">
              <Link to="/about">
                <button className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 mb-4">
                  Learn More
                </button>
              </Link>
              {/* Teks di bawah tombol */}
              <p className="text-gray-500 text-sm italic text-center md:text-left">
                *We are open to any question and discussion. Drop us a message!
              </p>
            </div>
            {/* Statistik di bawah teks */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-sky-600">5+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sky-600">238+</p>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sky-600">115</p>
                <p className="text-gray-500 text-sm">Loyal Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Home;
