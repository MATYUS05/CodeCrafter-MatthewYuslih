import AnimationWrapper from "./AnimationWrapper";

const Footer = () => {
  return (
    <AnimationWrapper>
      <footer className="bg-sky-950 py-6 w-full">
        <div className="container mx-auto text-center">
          <p className="text-white text-xs md:text-base">
            &copy; {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>
      </footer>
    </AnimationWrapper>
  );
};

export default Footer;
