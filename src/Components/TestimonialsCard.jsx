/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
const TestimonialsCard = ({ img, name, feedback, stars }) => {
  return (
    <div className="p-4 bg-[#D9D9D9] rounded-lg shadow-md">
      <div className="flex justify-center items-center">
        <img src={img} alt={name} className="size-28 rounded-full" />
      </div>
      <h1 className="text-black text-lg font-semibold text-center mt-2">
        {name}
      </h1>
      <div className="flex justify-center items-center mt-1">
        <div className="w-fit flex justify-center items-center gap-2 bg-[#9024B6] p-2 rounded-lg">
          {[...Array(stars)].map((_, index) => (
            <span key={index} className="text-white text-xl">
              <FaStar />
            </span>
          ))}
        </div>
      </div>
      <p className="text-black text-center mt-2">{feedback}</p>
    </div>
  );
};

export default TestimonialsCard;
