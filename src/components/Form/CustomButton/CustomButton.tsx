import React, { CSSProperties, ElementType, ReactNode } from "react";
import { Button, CircularProgress } from "@mui/material";

interface CustomButtonProps {
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  component?: ElementType;
  name?: string;
  children: ReactNode;
  size?: "small" | "large" | "medium";
  style?: CSSProperties;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "contained",
  color = "primary",
  onClick = () => {},
  children,
  loading = false,
  disabled = false,
  component = "button",
  name,
  size = "medium",
  style,
  className = "",
}) => {
  return (
    <Button
      className={className}
      style={style}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled || loading}
      component={component}
      name={name}
      aria-label={name}
      size={size}
    >
      {loading && <CircularProgress />}
      {children}
    </Button>
  );
};

export default CustomButton;
