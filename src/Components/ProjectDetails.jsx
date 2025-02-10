/* eslint-disable react/prop-types */
const ProjectDetails = ({ projimg, career }) => {
  return (
    <div className="flex flex-col items-center gap-[16px]">
      <img src={projimg} alt="" />
      <h6 className="text-xl font-medium">{career}</h6>
    </div>
  );
};

export default ProjectDetails;
