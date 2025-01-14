import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Inisialisasi AOS
    AOS.init();

    // Event listener untuk mendeteksi scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full p-5 transition-all duration-200 z-50 ${
        isScrolled
          ? "backdrop-blur-md bg-zinc-50 shadow-lg text-sky-600"
          : "bg-white text-sky-600"
      }`}
    >
      <div className="flex items-center justify-between mx-6 lg:mx-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold transition-all duration-200">
          CodeCrafters
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-16">
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-sky-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-sky-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-sky-600"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white text-sky-600 absolute top-full w-full left-0 shadow-lg transition-all duration-200 ${
          isMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="hover:text-black/50 transition-all duration-200">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
