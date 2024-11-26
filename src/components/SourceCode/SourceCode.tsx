import React from "react";
import CodeLine from "./CodeLine";
import styles from "./SourceCode.module.css";
import { useFetchMock } from "../../hooks/Mock/useFetchMock";

type CodeViewerProps = {
  fileName: string;
};

const SourceCode: React.FC<CodeViewerProps> = () => {
  const lines = useFetchMock();

  return (
    <div className={styles.viewerContainer}>
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
