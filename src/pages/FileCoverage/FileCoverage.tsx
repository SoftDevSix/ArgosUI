import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import SourceCode from "../../components/SourceCode";
import { splitUntilSecondSlash } from "../../utils/methods";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import { FILE_MANAGER_API_BASE_URL, UPLOADED_KEY } from "../../utils/constants";
import Splash from "../../components/Splash";
import ErrorAdvice from "../../components/ErrorAdvice";

const FileCoverage: React.FC = () => {
  const { uploadedKeys, setUploadedKeys } = useUploadedKeys();
  const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch<string>(apiUrl);

  useEffect(() => {
    const projectId = "e011bad2-0b57-4ed3-a278-29b255d25621";
    localStorage.setItem(UPLOADED_KEY, projectId);
    setUploadedKeys(projectId);
    // This effect will be deleted when finishing the integration with the project uploader
  }, [setUploadedKeys]);

  useEffect(() => {
    if (uploadedKeys && uploadedKeys.length > 0) {
      setApiUrl(
        `${FILE_MANAGER_API_BASE_URL}/api/files?projectId=${uploadedKeys}`
      );
    }
  }, [uploadedKeys]);

  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data);
      setSelectedFilePath(splitUntilSecondSlash(dataJson[0]));
    }
  }, [data]);

  if (loading) return <Splash splashMessage="Getting file info..." />;
  if (error) return <ErrorAdvice />;

  return (
    <Container component={"section"}>
      {selectedFilePath ? (
        <Box>
          <Typography variant="subtitle1">{selectedFilePath}</Typography>
          <SourceCode filePath={selectedFilePath} />
        </Box>
      ) : (
        <Typography
          variant="subtitle1"
          color="warning"
          mt={4}
          textAlign={"center"}
        >
          SELECT A FILE TO PREVIEW IT
        </Typography>
      )}
    </Container>
  );
};

export default FileCoverage;
