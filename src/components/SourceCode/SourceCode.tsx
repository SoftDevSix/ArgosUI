import React, { useEffect, useState } from "react";
import CodeLine from "./CodeLine";
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
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import { FILE_MANAGER_API_BASE_URL } from "../../utils/constants";

type CodeViewerProps = {
  filePath: string;
};

const SourceCode: React.FC<CodeViewerProps> = ({ filePath }) => {
  const { uploadedKeys } = useUploadedKeys();

  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch<string>(apiUrl);

  useEffect(() => {
    if (uploadedKeys && Object.values(uploadedKeys).length > 0) {
      setApiUrl(
        `${FILE_MANAGER_API_BASE_URL}/api/file?projectId=${Object.values(uploadedKeys).join("")}&filePath=${filePath}`
      );
    }
  }, [uploadedKeys, filePath]);

  if (loading)
    return (
      <Box>
        <CircularProgress size={50} />
      </Box>
    );

  if (error)
    return (
      <Box>
        <Typography color="error">
          Error getting the file. Try again reloading the page
        </Typography>
      </Box>
    );

  return (
    <Box
      display={"flex"}
      width={"100%"}
      mt={4}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {data ? (
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
