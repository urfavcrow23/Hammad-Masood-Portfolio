import ProjectDetails from "./ProjectDetails";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      id="portfolio"
      className="lg:px-[96px] md:px-[64px] sm:px-4 h:screen flex flex-col items-center gap-8 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg sm:text-xl font-medium uppercase">Portfolio</p>
        <h3 className="text-3xl sm:text-5xl font-medium">Latest Projects</h3>
        <p className="text-center max-w-2xl">
          Explore the captivating world of cutting-edge UI/UX designs that
          redefine digital experiences, showcasing our innovative solutions and
          inspiring creative journeys.
        </p>
      </motion.div>

      {/* Projects Container */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Project Cards */}
        {[
          { projimg: assets.uicard, career: "UI Design" },
          { projimg: assets.webcard, career: "Web Design" },
          { projimg: assets.appcard, career: "App Design" },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ProjectDetails projimg={project.projimg} career={project.career} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
