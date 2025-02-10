import { assets } from "../assets/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      id="myservices"
      className="lg:px-[96px] md:px-[64px] sm:px-4 flex flex-col gap-6 items-center text-center py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading Section */}
      <motion.p
        className="text-lg sm:text-xl font-medium uppercase"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My services
      </motion.p>
      <motion.h3
        className="text-3xl sm:text-5xl font-medium"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        The services I provide
      </motion.h3>

      {/* Services Container */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-6 sm:gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Service Cards */}
        {[
          {
            iconimg: assets.graphic_icon,
            hoverIcon: assets.white_graphic_icon,
            career: "Graphic design",
            aboutcareer:
              "I am a skilled graphic designer offering creative solutions that captivate audiences. With a keen eye for detail and a passion for visual storytelling.",
          },
          {
            iconimg: assets.ui_icon,
            hoverIcon: assets.white_ui_icon,
            career: "UI UX design",
            aboutcareer:
              "I craft user-friendly and visually appealing digital experiences, ensuring seamless interactions that enhance user engagement.",
          },
          {
            iconimg: assets.app_icon,
            hoverIcon: assets.white_app_icon,
            career: "Web Design",
            aboutcareer:
              "I specialize in creating visually stunning and user-friendly websites, balancing aesthetics and functionality.",
          },
          {
            iconimg: assets.web_icon,
            hoverIcon: assets.white_web_icon,
            career: "App design",
            aboutcareer:
              "I design sleek and intuitive mobile experiences, focusing on usability and aesthetics to enhance user engagement.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ServiceCard
              iconimg={service.iconimg}
              hoverIcon={service.hoverIcon}
              career={service.career}
              aboutcareer={service.aboutcareer}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
