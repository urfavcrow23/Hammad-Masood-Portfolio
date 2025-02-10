import { useTheme } from "../ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs"; // Import Sun & Moon icons
import { assets } from "../assets/assets";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="lg:px-[96px] md:px-[64px] sm:px-4 w-full flex items-center justify-between p-4 bg-white dark:bg-black sticky top-0 z-50">
      <img src={assets.site_logo} alt="Hammad" className="w-32 h-auto" />

      <ul className="flex justify-between gap-6">
        <li>
          <a
            href="#home"
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#aboutme"
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            My Services
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact me
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-center content-center gap-6">
        <button
          onClick={toggleTheme}
          className=" p-2 rounded-full bg-[#9024B6] text-white transition duration-300"
        >
          {theme === "dark" ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>

        <button className="p-4 bg-[#9024B6] rounded-full cursor-pointer text-white">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
