import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import "highlight.js/styles/atom-one-dark.css"; 
import styles from "./CodeLine.module.css";
import { Typography } from "@mui/material";

hljs.registerLanguage("java", java);

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
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      hljs.highlightElement(lineRef.current);
    }
  }, [line]);

  return (
    <div className={`${styles.lineWrapper} ${withoutCoverage ? styles.withoutCoverage : ""}`}>
      <span className={styles.lineNumber}>{lineNumber}</span>
      <div ref={lineRef} className={styles.code}>
        <Typography fontSize={10} component="pre" style={{ background: "none"}}>
          {line}
        </Typography>
      </div>
    </div>
  );
};

export default CodeLine;
