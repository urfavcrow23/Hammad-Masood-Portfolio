import { assets } from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" className="lg:px-[96px] md:px-[64px] sm:px-4 flex flex-col gap-8  items-center">
      <p className="text-xl font-medium uppercase">My services</p>
      <h3 className="text-5xl font-medium">The services I provide</h3>
      <div className="w-full justify-center flex flex-row gap-8 flex-wrap items-center">
        <ServiceCard
          iconimg={assets.graphic_icon}
          hoverIcon={assets.white_graphic_icon}
          career="Graphic design"
          aboutcareer="I am a skilled graphic designer offering
        creative solutions that captivate audiences.
        With a keen eye for detail and a passion for
        visual story telling, "
        />
        <ServiceCard
          iconimg={assets.ui_icon}
          hoverIcon={assets.white_ui_icon}
          career="UI UX design"
          aboutcareer="I am a skilled graphic designer offering
creative solutions that captivate audiences.
With a keen eye for detail and a passion for
visual story telling,"
        />
        <ServiceCard
          iconimg={assets.app_icon}
          hoverIcon={assets.white_app_icon}
          career="Web Design"
          aboutcareer="As a talented web designer, I specialize in
creating visually stunning and user-friendly
websites. With a focus on both aesthetics
and functionality"
        />
        <ServiceCard
          iconimg={assets.web_icon}
          hoverIcon={assets.white_web_icon}
          career="App design"
          aboutcareer="I am a proficient app designer specializing
in crafting sleek and user-friendly mobile
experiences."
        />
      </div>
    </div>
  );
};

export default Services;
