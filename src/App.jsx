// import { useTheme } from "./ThemeContext";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
export default function App() {
  // const { theme, toggleTheme } = useTheme();
  // lg:px-[96px] md:px-[64px] sm:px-4
  return (
    <div className=" bg-white dark:bg-black text-black dark:text-white font-poppins">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}
