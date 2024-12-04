import React, { useState } from "react";
import { ProjectInfoData } from "../../types/interfaces";
import Grid from "@mui/material/Grid2";
import ProjectForm from "./ProjectForm";
import { Typography } from "@mui/material";
import ProjectRules from "./ProjectRules";
import CustomButton from "../Form/CustomButton";
import { useNavigate } from "react-router-dom";
import { PageNames } from "../../utils/pageNames";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import Splash from "../Splash";
import { COLORS } from "../../utils/styleConstants";
import uploadZipProject from "../../services/FileManagerService";
import uploadProjectDataRules from "../../services/RulesManagerService";
import { Rules, RulesTypes } from "../../types/types";
import { ruleDefaults, rulesTypes } from "../../utils/rulesConstants";

const ProjectSetUp: React.FC = () => {
  const navigate = useNavigate();
  const { setUploadedKeys } = useUploadedKeys();
  const [projectData, setProjectData] = useState<ProjectInfoData>({
    projectName: "",
    projectDescription: "",
  });
  const [rulesConfig, setRulesConfig] = useState<Record<RulesTypes, Rules>>(
    () =>
      rulesTypes.reduce(
        (acc, type) => {
          acc[type] = { ...ruleDefaults[type] };
          return acc;
        },
        {} as Record<RulesTypes, Rules>
      )
  );

  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = () => {
    if (!formData) {
      alert("No zip selected.");
      return false;
    }

    if (!projectData.projectName) {
      alert("Set a project name.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm() || !formData) return;

    setLoading(true);
    const projectId = await uploadZipProject(formData, setUploadedKeys);
    let dataUploaded = false;
    if (projectId) {
      dataUploaded = await uploadProjectDataRules(
        projectData,
        rulesConfig.rules,
        projectId
      );
    }
    setLoading(false);

    if (projectId && dataUploaded) {
      navigate(`/${PageNames.COVERAGE_RESULTS}`);
    } else {
      alert("Failed to upload project. Please, try again");
    }
  };

  if (loading) return <Splash splashMessage="Analyzing..." />;

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
          <ProjectRules
            rulesConfig={rulesConfig}
            setRulesConfig={setRulesConfig}
          />
        </Grid>
        <Grid size={{ xs: 12 }} display={"flex"} justifyContent={"flex-end"}>
          <CustomButton
            onClick={handleSubmit}
            loading={loading}
            style={{
              backgroundColor: COLORS.PASS_BUTTON,
              fontSize: "24px",
              fontWeight: "bold",
              color: COLORS.NEUTRAL_BLACK,
              padding: "12px 40px",
            }}
          >
            Continue
          </CustomButton>
        </Grid>
      </Grid>
    </section>
  );
};

export default ProjectSetUp;
