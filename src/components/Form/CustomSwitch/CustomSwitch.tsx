import React from "react";
import { Box, Typography, Switch } from "@mui/material";

interface CustomSwitchProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Typography variant="subtitle1" mr={2}>
        {label}
      </Typography>
      <Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </Box>
  );
};

export default CustomSwitch;
