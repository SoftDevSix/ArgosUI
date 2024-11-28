import React from "react";
import styles from "./CodeLine.module.css";
import { Typography } from "@mui/material";

type CodeLineProps = {
  line: string;
  withoutCoverage: boolean;
  lineNumber: number;
};

const CodeLine: React.FC<CodeLineProps> = ({
  line,
  withoutCoverage = false,
  lineNumber,
}) => {
  return (
    <div>
      <span className={styles.lineNumber}>{lineNumber}</span>
      <div className={withoutCoverage ? styles.withoutCoverage : ""}>
        <Typography fontSize={10} className={styles.code}>
          {line}
        </Typography>
      </div>
    </div>
  );
};

export default CodeLine;
