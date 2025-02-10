/* eslint-disable react/prop-types */
import { useState } from "react";

const ServiceCard = ({ iconimg, hoverIcon, career, aboutcareer }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-row  w-[550px] h-[200px] p-6 bg-white rounded-lg shadow-md transition-all duration-300 text-[#9024B6] hover:text-white hover:bg-[#9024B6] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Service: ${career}`}
    >
      <div className="w-1/3 mx-auto relative">
        <img
          src={iconimg}
          alt={`${career} icon`}
          className={`absolute inset-0 size-32 transition-opacity duration-300 ${
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          src={hoverIcon}
          alt={`${career} hover icon`}
          className={`absolute inset-0 size-32 transition-opacity duration-300 ${
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      </div>

      {/* Text Content  mt-2 mt-4*/}
      <div className="w-2/3 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold ">{career}</h3>
        <p className=" leading-relaxed">{aboutcareer}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
