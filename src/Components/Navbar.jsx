import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { BsSun, BsMoon, BsList } from "react-icons/bs"; // Added menu icon
import { IoMdClose } from "react-icons/io"; // Close icon for mobile menu
import { assets } from "../assets/assets";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lg:px-[96px] md:px-[64px] sm:px-4 px-4 w-full flex items-center justify-between p-4 bg-white dark:bg-black sticky top-0 z-50">
      {/* Logo */}
      <img src={assets.site_logo} alt="Hammad" className="w-32 h-auto" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-between gap-6">
        {[
          "Home",
          "About me",
          "My Services",
          "Portfolio",
          "Testimonials",
          "Contact me",
        ].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right-side Buttons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-[#9024B6] text-white transition duration-300"
        >
          {theme === "dark" ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>

        {/* Download CV Button (Hidden on Small Screens) */}
        <button className="hidden md:block p-4 bg-[#9024B6] rounded-full cursor-pointer text-white">
          Download CV
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? (
            <IoMdClose size={28} className="text-[#9024B6]" />
          ) : (
            <BsList size={28} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-4 py-6 md:hidden transition-all duration-300 shadow-lg">
          {[
            "Home",
            "About me",
            "My Services",
            "Portfolio",
            "Testimonials",
            "Contact me",
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-black dark:text-white text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Mobile Download CV Button */}
          <button className="p-3 bg-[#9024B6] rounded-full cursor-pointer text-white">
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
