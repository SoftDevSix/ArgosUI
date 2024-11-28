import React from "react";
import { CodeRatingType, Rules, RulesTypes } from "../../../../types/types";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { codeRatings } from "../../../../utils/rulesConstants";
import CustomSwitch from "../../../Form/CustomSwitch";

interface CodeRatingRulesProps {
  rulesConfig: Record<RulesTypes, Rules>;
  setRulesConfig: React.Dispatch<
    React.SetStateAction<Record<RulesTypes, Rules>>
  >;
  handleSwitchChange: (field: keyof Rules, value: boolean) => void;
}

const CodeRatingRules: React.FC<CodeRatingRulesProps> = ({
  rulesConfig,
  setRulesConfig,
  handleSwitchChange,
}) => {
  const handleCodeRatingChange = (newRating: CodeRatingType | null) => {
    if (newRating) {
      setRulesConfig((prev) => ({
        ...prev,
        rules: {
          ...prev.rules,
          codeRating: newRating,
        },
      }));
    }
  };

  return (
    <Box>
      <CustomSwitch
        label="Code Rating"
        checked={rulesConfig.rules.codeRatingEnabled}
        onChange={(value) => handleSwitchChange("codeRatingEnabled", value)}
      />
      <Typography variant="body2" mt={2} mb={1}>
        Minimum required
      </Typography>
      <ToggleButtonGroup value={rulesConfig.rules.codeRating}>
        {codeRatings.map((rating) => (
          <ToggleButton
            key={rating}
            value={rating}
            disabled={!rulesConfig.rules.codeRatingEnabled}
            onClick={() => handleCodeRatingChange(rating)}
            sx={{
              color: rulesConfig.rules.codeRatingEnabled ? "#fff" : "#A9A9A9",
              "&.Mui-selected": {
                backgroundColor: "#80E27E",
                color: "#1C1C28",
              },
            }}
          >
            {rating}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default CodeRatingRules;
