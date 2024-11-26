import React from "react";
import { Box, TextField, Typography } from "@mui/material";

interface CustomTextFieldProps {
  value: string;
  setValue: (val: string) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  mt?: number;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  value,
  setValue,
  label,
  placeholder,
  required = true,
  disabled = false,
  fullWidth = true,
  multiline = false,
  mt = 0,
}) => {
  return (
    <Box mt={mt}>
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        multiline={multiline}
      />
    </Box>
  );
};

export default CustomTextField;
