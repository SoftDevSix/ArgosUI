import React from "react";
import { TextField, FormControlLabel, Grid, Switch } from "@mui/material";
import { Rules } from "../../../../types/types";

interface RuleConfigurationProps {
  rules: Rules;
  onChange: (updatedRules: Rules) => void;
}

const RuleConfiguration: React.FC<RuleConfigurationProps> = ({
  rules,
  onChange,
}) => {
  const handleInputChange = (key: string, value: any) => {
    onChange({ ...rules, [key]: value });
  };

  return (
    <Grid container spacing={2}>
      {Object.entries(rules).map(([key, value]) => (
        <Grid item xs={12} sm={6} key={key}>
          {typeof value === "boolean" ? (
            <FormControlLabel
              label={key} 
              labelPlacement="start" 
              control={
                <Switch
                  checked={value}
                  onChange={(e) => handleInputChange(key, e.target.checked)}
                  color="primary"
                />
              }
            />
          ) : (
            <TextField
              label={key}
              type="number"
              value={value}
              onChange={(e) =>
                handleInputChange(key, parseInt(e.target.value, 10))
              }
              fullWidth
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default RuleConfiguration;
