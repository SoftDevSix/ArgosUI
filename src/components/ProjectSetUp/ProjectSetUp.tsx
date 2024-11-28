import React, { useEffect, useState } from "react";
import { ProjectInfoData } from "../../types/interfaces";
import Grid from "@mui/material/Grid2";
import ProjectForm from "./ProjectForm";
import { Typography } from "@mui/material";
import ProjectRules from "./ProjectRules";

const ProjectSetUp: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectInfoData>({
    projectName: "",
    projectDescription: "",
  });

  const [projectFiles, setProjectFiles] = useState<FileList | null>(null);

  useEffect(() => {
    console.log(projectFiles);
    // Delete this effect when sending the project files to the api
  }, [projectFiles]);

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
            setProjectFiles={setProjectFiles}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <ProjectRules />
        </Grid>
      </Grid>
    </section>
  );
};

export default ProjectSetUp;
