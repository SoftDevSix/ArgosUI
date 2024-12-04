import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import "highlight.js/styles/atom-one-dark.css";
import styles from "./CodeLine.module.css";
import { Alert, Button, IconButton, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

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
  const [showProblem, setShowProblem] = useState(false);

  useEffect(() => {
    if (lineRef.current) {
      hljs.highlightElement(lineRef.current);
    }
  }, [line]);

  return (
    <>
      {withoutCoverage && showProblem && (
        <Alert
          variant="filled"
          severity="warning"
          style={{ fontSize: 16 }}
          onClick={() => setShowProblem(false)}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => setShowProblem(false)}
            >
              HIDE
            </Button>
          }
        >
          {`(Line ${lineNumber}): This line is not covered by tests.`}
        </Alert>
      )}
      <div
        role="button"
        className={`${styles.lineWrapper} ${withoutCoverage ? styles.withoutCoverage : ""}`}
        onClick={() => setShowProblem(!showProblem)}
        onKeyDown={() => setShowProblem(!showProblem)}
        tabIndex={lineNumber}
        aria-pressed={showProblem}
      >
        {withoutCoverage ? (
          <IconButton onClick={() => setShowProblem(!showProblem)}>
            <ReportProblemIcon fontSize="small" />
          </IconButton>
        ) : (
          <div style={{ marginRight: 36 }} />
        )}
        <span className={styles.lineNumber}>{lineNumber}</span>
        <div ref={lineRef} className={styles.code}>
          <Typography
            fontSize={10}
            component="pre"
            style={{ background: "none" }}
          >
            {line}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default CodeLine;
