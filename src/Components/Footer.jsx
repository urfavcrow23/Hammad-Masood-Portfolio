import { assets } from "../assets/assets";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" flex flex-col gap-[32px] pt-[24px] ">
      <div className="flex flex-row  justify-center gap-[48px]">
        <img className="w-[125px]" src={assets.site_logo} alt="" />
      </div>

      <ul className="flex flex-row  justify-center gap-[48px]">
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
            My services
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
            href=""
            className="relative  text-black dark:text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#9024B6] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact me
          </a>
        </li>
      </ul>

      <ul className="flex flex-row  justify-center gap-[16px]">
        <li>
          <a href="">
            <FaFacebook className="size-[24px] hover:text-[#9024B6]" />
          </a>
        </li>
        <li>
          <a href="">
            <FaInstagram className="size-[24px] hover:text-[#9024B6]" />
          </a>
        </li>
        <li>
          <a href="">
            <IoLogoTwitter className="size-[24px] hover:text-[#9024B6]" />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin className="size-[24px] hover:text-[#9024B6]" />
          </a>
        </li>
      </ul>

      <div className="w-full bg-[#9024B6] text-white text-center p-4">
        © 2025 <span className="font-bold">Future You</span> All Rights Reserved
        , Inc.
      </div>
    </div>
  );
};

export default Footer;
