import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      className="lg:px-[96px] md:px-[64px] sm:px-4 h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center pb-4 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left - Text Section */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col gap-6 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-2xl" style={{ fontFamily: "'Great Vibes', serif" }}>
          I am
        </p>
        <motion.div
          className="bg-[#9024B6] w-[309px] p-2 rounded-lg text-center text-white"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hammad Masood
        </motion.div>
        <span className="text-6xl sm:text-8xl text-[#9024B6] font-bold">
          UI&UX
        </span>
        <span className="text-4xl sm:text-6xl uppercase tracking-widest">
          Designer
        </span>
        <p className="text-sm sm:text-base">
          Creative UI/UX designer crafting captivating digital <br />
          experiences with a user-centered approach.
        </p>

        {/* Animated Button */}
        <motion.button
          className="text-white bg-[#9024B6] w-28 p-2 rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire me
        </motion.button>
      </motion.div>

      {/* Right - Image with Motion */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src={assets.hero_char}
          alt="Hammad"
          className="w-[300px] sm:w-[500px] md:w-[525px]"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
