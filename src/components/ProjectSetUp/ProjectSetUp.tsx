import React, { useState } from "react";
import { ProjectInfoData } from "../../types/interfaces";
import Grid from "@mui/material/Grid2";
import ProjectForm from "./ProjectForm";
import { Typography } from "@mui/material";
import ProjectRules from "./ProjectRules";
import CustomButton from "../Form/CustomButton";
import { UPLOADED_KEY } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { PageNames } from "../../utils/pageNames";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import Splash from "../Splash";

const ProjectSetUp: React.FC = () => {
  const navigate = useNavigate();
  const { setUploadedKeys } = useUploadedKeys();
  const [projectData, setProjectData] = useState<ProjectInfoData>({
    projectName: "",
    projectDescription: "",
  });

  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!formData) {
      alert("No zip selected");
      return;
    }
    setLoading(true);
    const response = await fetch(
      "http://localhost:8080/fileManager/uploadZip",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const result = await response.json();
      try {
        await fetch(
          `http://localhost:8081/coverage/create-notification/projectCreationNotification?id=${result.projectId.toString()}`,
          {
            method: "POST",
          }
        );
      } catch (error) {}
      localStorage.setItem(UPLOADED_KEY, result.projectId.toString());
      setUploadedKeys(result.projectId.toString());
      alert("File uploaded successfully!");
      navigate(`/${PageNames.COVERAGE_RESULTS}`);
      setLoading(false);
    } else {
      setLoading(false);
      const error = await response.text();
      alert("File upload failed: " + error);
    }
  };

  if (loading) return <Splash />;

  return (
    <section>
      <Typography variant="h1" mb={6}>
        Project & Rules Setup
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <ProjectForm
            projectData={projectData}
            setProjectData={setProjectData}
            setFormData={setFormData}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <ProjectRules />
          <br />
          <br />
          <CustomButton
            onClick={handleSubmit}
            loading={loading}
            color="success"
          >
            Continue
          </CustomButton>
        </Grid>
      </Grid>
    </section>
  );
};

export default ProjectSetUp;
