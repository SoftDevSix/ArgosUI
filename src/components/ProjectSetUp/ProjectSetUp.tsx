import React from "react";
import CustomTextField from "../Inputs/CustomTextField";

const ProjectSetUp: React.FC = () => {
  return (
    <div>
      <CustomTextField
        value=""
        setValue={() => {}}
        label="Project Name"
        placeholder={"Eg: Argos"}
        required
      />
    </div>
  );
};

export default ProjectSetUp;
