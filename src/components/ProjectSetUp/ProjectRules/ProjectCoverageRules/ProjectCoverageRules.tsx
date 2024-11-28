import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Rules, RulesTypes } from "../../../../types/types";
import { COLORS } from "../../../../utils/styleConstants";
import styles from "./projectCoverageRules.module.css";
import CustomSwitch from "../../../Form/CustomSwitch";

interface ProjectCoverageRulesConfig {
  rulesConfig: Record<RulesTypes, Rules>;
  setRulesConfig: React.Dispatch<
    React.SetStateAction<Record<RulesTypes, Rules>>
  >;
  handleSwitchChange: (field: keyof Rules, value: boolean) => void;
}

const ProjectCoverageRules: React.FC<ProjectCoverageRulesConfig> = ({
  rulesConfig,
  setRulesConfig,
  handleSwitchChange,
}) => {
  const handleThresholdChange = (value: number) => {
    if (value < 0 || value > 100) return;
    setRulesConfig((prev) => ({
      ...prev,
      rules: {
        ...prev.rules,
        projectCoverageThreshold: value,
      },
    }));
  };

  return (
    <Box mb={3}>
      <CustomSwitch
        label="Project Coverage"
        checked={rulesConfig.rules.projectCoverageEnabled}
        onChange={(value) =>
          handleSwitchChange("projectCoverageEnabled", value)
        }
      />

      <Typography variant="body2" mt={1} mr={1}>
        Minimum required
      </Typography>
      <Box className={styles.fieldPercentageContainer}>
        <TextField
          variant="outlined"
          size="small"
          type="number"
          disabled={!rulesConfig.rules.projectCoverageEnabled}
          value={rulesConfig.rules.projectCoverageThreshold}
          onChange={(e) => handleThresholdChange(parseInt(e.target.value, 10))}
          sx={{
            width: 80,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: rulesConfig.rules.projectCoverageEnabled
                  ? COLORS.PASS_BUTTON
                  : COLORS.GREY_DISABLED,
              },
            },
          }}
        />
        <Typography variant="body1" sx={{ marginLeft: 1 }}>
          %
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCoverageRules;
