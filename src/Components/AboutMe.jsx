import { assets } from "../assets/assets";
import Probar from "./Probar/Probar";

const AboutMe = () => {
  return (
    <div id="aboutme" className="lg:px-[96px] md:px-[64px] sm:px-4 flex flex-row justify-center my-12 ">
      <div className="w-1/2">
        <img src={assets.about_char} alt="" className="size-[625px]" />
      </div>
      <div className="w-1/2 flex flex-col justify-around">
        <p className="text-xl font-medium">ABOUT ME </p>
        <h3 className="text-5xl font-medium">Why you hire me</h3>
        <p>
          You should hire me as a UI/UX designer because I have a strong eye for
          design, a deep understanding of user psychology, and a track record of
          creating intuitive and visually appealing interfaces.
        </p>

        <Probar career="UI Design" barprogress={50} />
        <Probar career="Graphic design" barprogress={60} />
        <Probar career="Web Design" barprogress={80} />
        <Probar career="App Design" barprogress={30} />
      </div>
    </div>
  );
};

export default AboutMe;
