import { assets } from "../assets/assets";
import Probar from "./Probar/Probar";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      id="aboutme"
      className="lg:px-[96px] md:px-[64px] sm:px-4 px-4 flex flex-col-reverse md:flex-row justify-center items-center my-12 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left - Image with Slide-in Effect */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src={assets.about_char}
          alt="About Me"
          className="w-[300px] sm:w-[450px] md:w-[600px] max-w-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Right - Text & Progress Bars */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col justify-around text-center md:text-left gap-6"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-lg sm:text-xl font-medium">ABOUT ME</p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Why You Should Hire Me
        </h3>
        <p className="text-sm sm:text-base">
          You should hire me as a UI/UX designer because I have a strong eye for
          design, a deep understanding of user psychology, and a track record of
          creating intuitive and visually appealing interfaces.
        </p>

        {/* Progress Bars - Staggered Effect */}
        {[
          { career: "UI Design", progress: 50 },
          { career: "Graphic Design", progress: 60 },
          { career: "Web Design", progress: 80 },
          { career: "App Design", progress: 30 },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <Probar career={item.career} barprogress={item.progress} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
