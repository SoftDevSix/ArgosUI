import React from "react";
import CodeLine from "./CodeLine";
import styles from "./SourceCode.module.css";

type CodeViewerProps = {
  fileName: string;
  lines: string[];
};

const SourceCode: React.FC<CodeViewerProps> = ({ lines = [] }) => {
  return (
    <div>
      <div className={styles.codeContainer}>
        {lines.map((line, index) => (
          <CodeLine
            key={index}
            line={line}
            lineNumber={index + 1}
            withoutCoverage={index % 5 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default SourceCode;
