import React, { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
} from "@mui/material";
import { RulesConfig } from "../../../../types/rulesInterfaces";
import { codeRatings } from "../../../../utils/rulesConstants";
import { CodeRatingType } from "../../../../types/types";

const GeneralRulesConfiguration: React.FC = () => {
  const [config, setConfig] = useState<RulesConfig>({
    projectCoverageEnabled: false,
    projectCoverageThreshold: 50,
    codeRatingEnabled: false,
    codeRating: "B",
  });

  const handleSwitchChange = (field: keyof RulesConfig, value: boolean) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleThresholdChange = (value: number) => {
    if (value < 0 || value > 100) return;
    setConfig((prev) => ({
      ...prev,
      projectCoverageThreshold: value,
    }));
  };

  const handleCodeRatingChange = (newRating: CodeRatingType | null) => {
    if (newRating) {
      setConfig((prev) => ({
        ...prev,
        codeRating: newRating,
      }));
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Project Coverage
          </Typography>
          <Switch
            checked={config.projectCoverageEnabled}
            onChange={(e) =>
              handleSwitchChange("projectCoverageEnabled", e.target.checked)
            }
            color="primary"
          />

          <Typography variant="body2" mt={1} mr={1}>
            Minimum required
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 1,
              padding: "4px 0",
              borderRadius: 1,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              type="number"
              disabled={!config.projectCoverageEnabled}
              value={config.projectCoverageThreshold}
              onChange={(e) =>
                handleThresholdChange(parseInt(e.target.value, 10))
              }
              sx={{
                width: 80,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: config.projectCoverageEnabled
                      ? "#80E27E"
                      : "#4C4C5A",
                  },
                },
              }}
            />
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              %
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Code Rating
          </Typography>
          <Switch
            checked={config.codeRatingEnabled}
            onChange={(e) =>
              handleSwitchChange("codeRatingEnabled", e.target.checked)
            }
            color="primary"
          />
          <Typography variant="body2" mt={2} mb={1}>
            Minimum required
          </Typography>
          <ToggleButtonGroup value={config.codeRating}>
            {codeRatings.map((rating) => (
              <ToggleButton
                key={rating}
                value={rating}
                disabled={!config.codeRatingEnabled}
                onClick={() => handleCodeRatingChange(rating)}
                sx={{
                  color: config.codeRatingEnabled ? "#fff" : "#A9A9A9",
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
      </CardContent>
    </Card>
  );
};

export default GeneralRulesConfiguration;
