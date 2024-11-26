import React from "react";
import { Box, TextField, Typography } from "@mui/material";

interface CustomTextFieldProps {
  value: string;
  setValue: (val: string) => void;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  mt?: number;
  minRows?: number;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  value,
  setValue,
  label,
  name,
  placeholder,
  required = true,
  disabled = false,
  fullWidth = true,
  multiline = false,
  mt = 0,
  minRows = 1,
}) => {
  return (
    <Box mt={mt}>
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <TextField
        value={value}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        multiline={multiline}
        minRows={minRows}
      />
    </Box>
  );
};

export default CustomTextField;
