import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import SourceCode from "../../components/SourceCode";
import { splitUntilSecondSlash } from "../../utils/methods";

const FileCoverage: React.FC = () => {
  const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);

  const projectId = "e011bad2-0b57-4ed3-a278-29b255d25621";

  const { data, loading, error } = useFetch<string>(
    `http://localhost:8080/api/files?projectId=${projectId}`
  );

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
