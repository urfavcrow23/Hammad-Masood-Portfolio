import { assets } from "../assets/assets";
import { motion } from "motion/react";
const HeroSection = () => {
  return (
    <div
      id="home"
      className="lg:px-[96px] md:px-[64px] sm:px-4 h-screen w-full flex flex-row  justify-center items-center pb-4"
    >
      <div className="w-1/2 flex flex-col gap-12">
        <span className="flex flex-col gap-4">
          <p
            className="text-2xl"
            style={{ fontFamily: "'Great Vibes', serif" }}
          >
            I am
          </p>
          <div className="bg-[#9024B6] w-[309px] p-2 rounded-lg text-center text-white">
            Hammad Masood
          </div>
          <span className="text-8xl text-[#9024B6] font-bold">UI&UX</span>
          <span className="text-6xl uppercase tracking-widest">Designer</span>
          <p>
            Creative UI/UX designer crafting captivating digital <br />
            experiences with a user-centered approach.
          </p>
        </span>

        <button className="text-white bg-[#9024B6] w-28 p-2 rounded-lg ">
          Hire me
        </button>
      </div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className="w-1/2"
      >
        <img src={assets.hero_char} alt="Hammad" className="size-[625px]" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
