import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import styles from "./customTextField.module.css";

interface CustomTextFieldProps {
  value: string;
  setValue: (val: string) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  value,
  setValue,
  label,
  placeholder,
  required = false,
  disabled = false,
  fullWidth = true,
  multiline = false
}) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom className={styles.labelTextField}>
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
