import React from "react";
import { Box, Card, CardContent, IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { Rules, RulesTypes } from "../../../../types/types";
import ProjectCoverageRules from "../ProjectCoverageRules";
import CodeRatingRules from "../CodeRatingRules";

interface GeneralRulesConfigurationProps {
  rulesConfig: Record<RulesTypes, Rules>;
  setRulesConfig: React.Dispatch<
    React.SetStateAction<Record<RulesTypes, Rules>>
  >;
  handleGoBack: () => void;
}

const GeneralRulesConfiguration: React.FC<GeneralRulesConfigurationProps> = ({
  rulesConfig,
  setRulesConfig,
  handleGoBack,
}) => {
  const handleSwitchChange = (field: keyof Rules, value: boolean) => {
    setRulesConfig((prev) => ({
      ...prev,
      rules: {
        ...prev.rules,
        [field]: value,
      },
    }));
  };

  return (
    <Card>
      <CardContent>
        <IconButton onClick={handleGoBack} aria-label="general-rules-back">
          <ChevronLeft />
        </IconButton>
        <Box paddingX={2}>
          <ProjectCoverageRules
            rulesConfig={rulesConfig}
            setRulesConfig={setRulesConfig}
            handleSwitchChange={handleSwitchChange}
          />

          <CodeRatingRules
            rulesConfig={rulesConfig}
            setRulesConfig={setRulesConfig}
            handleSwitchChange={handleSwitchChange}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default GeneralRulesConfiguration;
