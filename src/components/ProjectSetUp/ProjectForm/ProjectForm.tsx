import React from "react";
import CustomTextField from "../../Inputs/CustomTextField";
import { ProjectInfoData } from "../../../types/interfaces";
import ProjectUploader from "../ProjectUploader";

interface ProjectFormProps {
  projectData: ProjectInfoData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectInfoData>>;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  projectData,
  setProjectData,
}) => {
  const fields = [
    {
      key: "projectName",
      label: "Project Name",
      placeholder: "Eg: Argos",
    },
    {
      key: "projectDescription",
      label: "Project Description",
      placeholder: "Eg: Argos",
      multiline: true,
      mt: 4,
      minRows: 4
    },
  ];

  const handleFieldChange = (key: string, value: string) => {
    setProjectData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      {fields.map((field) => (
        <CustomTextField
          key={field.key}
          name={field.key}
          value={projectData[field.key as keyof typeof projectData]}
          setValue={(val) => handleFieldChange(field.key, val)}
          label={field.label}
          placeholder={field.placeholder}
          multiline={field.multiline}
          mt={field.mt}
          minRows={field.minRows}
        />
      ))}
      <ProjectUploader/>
    </div>
  );
};

export default ProjectForm;
