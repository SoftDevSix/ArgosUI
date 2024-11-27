import React from "react";
import styles from "./MetricCircle.module.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import { COLORS } from "../../utils/styleConstants.ts";

interface MetricCircleProps {
  value: number;
  color: keyof typeof COLORS;
  label: string;
  circleSize: number;
}

const MetricCircle: React.FC<MetricCircleProps> = ({
  value,
  color,
  label,
  circleSize,
}) => (
  <div className={styles.metricContainer}>
    <Box position="relative">
      <CircularProgress
        variant="determinate"
        value={100}
        size={circleSize}
        thickness={4}
        sx={{ color: COLORS.PRIMARY_DEFAULT }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={circleSize}
        thickness={4}
        sx={{
          color: color,
          position: "absolute",
          left: 0,
        }}
      />
      <Typography
        className={styles.circleLabel}
        sx={{ fontWeight: "bold" }}
      >{`${value}%`}</Typography>
    </Box>
    <Typography
      className={styles.metricLabel}
      sx={{ color: COLORS.SECONDARY_TEXT }}
    >
      {label}
    </Typography>
  </div>
);

export default MetricCircle;
