import ProjectDetails from "./ProjectDetails";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <div id="projects" className="lg:px-[96px] md:px-[64px] sm:px-4 flex flex-col items-center gap-[32px] py-[48px]">
      <div className="flex flex-col items-center gap-[16px]">
        <p className="text-xl font-medium uppercase">Portfolio</p>
        <h3 className="text-5xl font-medium">Latest Projects</h3>
        <p className="text-center">
          Explore the captivating world of cutting-edge UI/UX designsthat
          redefine digital experiences, showcasing <br />
          our innovative solutions and inspiring creative journeys.
        </p>
      </div>
      <div className="flex flex-row items-center justify-betweens gap-[16px]">
        <ProjectDetails projimg={assets.uicard} career="UI Design" />
        <ProjectDetails projimg={assets.webcard} career="Web Design" />
        <ProjectDetails projimg={assets.appcard} career="App Design" />
      </div>
    </div>
  );
};

export default Projects;
