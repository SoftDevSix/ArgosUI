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
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}></Grid>
      </Grid>
    </section>
  );
};

export default ProjectSetUp;
