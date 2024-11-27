import React, { useState } from "react";
import { ProjectInfoData } from "../../types/interfaces";
import Grid from "@mui/material/Grid2";
import ProjectForm from "./ProjectForm";
import { Typography } from "@mui/material";

const ProjectSetUp: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectInfoData>({
    projectName: "",
    projectDescription: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_projectFiles, setProjectFiles] = useState<FileList | null>(null);
  // TODO: Delete eslint disabled line when sending the projectFiles to the api

  return (
    <section>
      <Typography variant="h1" mb={6}>
        Project & Rules Setup
      </Typography>
      <Grid container>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <ProjectForm
            projectData={projectData}
            setProjectData={setProjectData}
            setProjectFiles={setProjectFiles}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}></Grid>
      </Grid>
    </section>
  );
};

export default ProjectSetUp;
