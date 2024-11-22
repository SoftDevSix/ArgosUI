import React from "react";
import styles from "./CodeLine.module.css";

type CodeLineProps = {
  line: string[];
  withoutCoverage: boolean;
  lineNumber: number;
};

const CodeLine: React.FC<CodeLineProps> = ({
  line,
  withoutCoverage,
  lineNumber,
}) => {
  return (
    <div className={styles.line}>
      <span className={styles.lineNumber}>{lineNumber}</span>
      <span
        className={`${styles.code} ${
          withoutCoverage ? styles.withoutCoverage : ""
        }`}
      >
        {line.map((token, index) => (
          <span key={index} className={styles.token}>
            {token}{" "}
          </span>
        ))}
      </span>
    </div>
  );
};

export default CodeLine;
