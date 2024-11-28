import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import SourceCode from "../../components/SourceCode";
import { splitUntilSecondSlash } from "../../utils/methods";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import { UPLOADED_KEY } from "../../utils/constants";

const API_BASE_URL = import.meta.env.VITE_FILE_MANAGER_API_BASE_URL;

const FileCoverage: React.FC = () => {
  const { uploadedKeys, setUploadedKeys } = useUploadedKeys();
  const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch<string>(apiUrl);

  useEffect(() => {
    const projectId = "e011bad2-0b57-4ed3-a278-29b255d25621";
    localStorage.setItem(UPLOADED_KEY, JSON.stringify(projectId));
    setUploadedKeys({ projectId });
    // This effect will be deleted when finishing the integration with the project uploader
  }, []);

  useEffect(() => {
    if (uploadedKeys && Object.values(uploadedKeys).length > 0) {
      setApiUrl(
        `${API_BASE_URL}/api/files?projectId=${Object.values(uploadedKeys).join("")}`
      );
    }
  }, [uploadedKeys]);

  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data);
      setSelectedFilePath(splitUntilSecondSlash(dataJson[2]));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Container component={"section"}>
      {!!selectedFilePath ? (
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
