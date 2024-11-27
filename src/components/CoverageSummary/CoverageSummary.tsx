import React from "react";
import { Typography } from "@mui/material";
import styles from "./CoverageSummary.module.css";
import MetricCircle from "../MetricCircle/MetricCircle.tsx";
import NotesIcon from "@mui/icons-material/Notes";
import { COLORS } from "../../utils/styleConstants.ts";

interface CoverageSummaryProps {
  fileCoverage?: number;
  methodCoverage?: number;
  linesOfCode?: number;
}

const CoverageSummary: React.FC<CoverageSummaryProps> = ({
  fileCoverage = 10,
  methodCoverage = 10,
  linesOfCode = 20,
}) => {
  return (
    <div className={styles.container}>
      <MetricCircle
        value={fileCoverage}
        color="GREEN"
        label="File coverage"
        circleSize={110}
      />
      <MetricCircle
        value={methodCoverage}
        color="GREEN"
        label="Method coverage"
        circleSize={80}
      />
      <div className={styles.linesContainer}>
        <div className={styles.iconAndCount}>
          <NotesIcon sx={{ fontSize: "48px", color: COLORS.YELLOW }} />
          <Typography
            className={styles.linesCount}
            sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            {linesOfCode}
          </Typography>
        </div>
        <Typography
          className={styles.metricLabel}
          sx={{ color: COLORS.SECONDARY_TEXT }}
        >
          Lines of code
        </Typography>
      </div>
    </div>
  );
};

export default CoverageSummary;
