import React from "react";
import CodeLine from "./CodeLine/CodeLine";
import styles from "./SourceCode.module.css";
import useFetch from "../../hooks/useFetch";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { COLORS } from "../../utils/styleConstants";

type CodeViewerProps = {
  filePath: string;
};

const SourceCode: React.FC<CodeViewerProps> = ({ filePath }) => {
  const projectId = "e011bad2-0b57-4ed3-a278-29b255d25621";

  const url = `http://localhost:8080/api/file?projectId=${projectId}&filePath=${filePath}`;
  const { data, loading, error } = useFetch<string>(url);

  return (
    <Box display={"flex"} width={"100%"} mt={4} alignItems={"center"} justifyContent={"center"}>
      {loading ? (
        <Box>
          <CircularProgress size={50} />
        </Box>
      ) : !!error ? (
        <Box>
          <Typography color="error">
            Error getting the file. Try again reloading the page
          </Typography>
        </Box>
      ) : data ? (
        <Card>
          <CardContent style={{ backgroundColor: COLORS.PRIMARY_HOVER }}>
            <div className={styles.codeContainer}>
              {data.split("\n").map((line, index) => (
                <CodeLine
                  key={filePath + "_" + index}
                  line={line}
                  lineNumber={index + 1}
                  withoutCoverage={index % 5 === 0}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Box>
          <Typography color="warning">No content in the file</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SourceCode;
