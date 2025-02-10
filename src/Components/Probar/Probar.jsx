/* eslint-disable react/prop-types */
import "./probar.css";
const Probar = ({ career, barprogress }) => {
  return (
    <div>
      <h4 className="pb-3 text-2xl">{career}</h4>
      <div className="relative w-full  bg-gray-200 rounded h-4 ">
        <div
          style={{
            width:
              typeof barprogress === "number" ? `${barprogress}%` : barprogress,
          }}
          className="absolute top-0 left-0 h-4 w-full rounded shim-main"
        ></div>
      </div>
    </div>
  );
};

export default Probar;
