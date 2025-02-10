"use client";

import { animate, motion, useMotionValue, useScroll } from "framer-motion";
import { useRef } from "react";
import TestimonialsCard from "./TestimonialsCard";
import { assets } from "../assets/assets";

const Testimonials = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  const testimonialsData = [
    {
      img: assets.secchar,
      name: "Sarah L.",
      feedback:
        "Collaborating with your UI/UX team for our website was an exceptional experience. From the initial consultation to the final implementation, they demonstrated professionalism, creativity, and dedication to outstanding results.",
      stars: 5,
    },
    {
      img: assets.firstchar,
      name: "Johnathan H.",
      feedback:
        "Your UI/UX website truly stands out from the crowd. The attention to detail, seamless navigation, and intuitive user interface have greatly improved our customer engagement. Thank you for delivering excellence!",
      stars: 4,
    },
    {
      img: assets.thirdchar,
      name: "Emily S.",
      feedback:
        "I found your resources and tutorials incredibly helpful in enhancing my understanding of user experience. The clean and intuitive layout of your website made learning so much easier. Thank you!",
      stars: 3,
    },
  ];

  return (
    <div id="testimonials" className="lg:px-[96px] md:px-[64px] sm:px-4 flex flex-col items-center gap-[32px] py-[48px]">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <p className="text-xl font-medium uppercase">Testimonials</p>
        <h3 className="text-5xl font-medium text-[#9024B6]">
          People Talk About Us
        </h3>
      </div>

      {/* Scrollable Testimonials */}
      <motion.div
        ref={ref}
        className="flex gap-[16px] overflow-x-auto pb-4"
        style={{ maskImage }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[300px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TestimonialsCard {...testimonial} />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div className="w-full h-1 bg-gray-300 rounded-md mt-4 relative">
        <motion.div
          className="h-full bg-[#9024B6] rounded-md"
          style={{ scaleX: scrollXProgress }}
        />
      </motion.div> */}
    </div>
  );
};

/* Scroll Mask Effect */
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${transparent}, ${opaque} 20%, ${opaque} 80%, ${transparent})`
  );

  scrollXProgress.onChange((value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} 20%, ${opaque} 80%, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} 20%, ${opaque} 80%, ${opaque})`
      );
    } else {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} 20%, ${opaque} 80%, ${transparent})`
      );
    }
  });

  return maskImage;
}

export default Testimonials;
