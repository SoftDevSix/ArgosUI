import React from "react";
import CustomTextField from "../../Form/CustomTextField";
import { ProjectInfoData } from "../../../types/interfaces";
import ProjectUploader from "../ProjectUploader";

interface ProjectFormProps {
  projectData: ProjectInfoData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectInfoData>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  projectData,
  setProjectData,
  setFormData,
}) => {
  const fields = [
    {
      key: "projectName",
      label: "Project Name",
      placeholder: "Argos",
    },
    {
      key: "projectDescription",
      label: "Project Description",
      placeholder: "Code reviewing tool",
      multiline: true,
      mt: 4,
      minRows: 4,
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
      <ProjectUploader setFormData={setFormData} />
    </div>
  );
};

export default ProjectForm;
