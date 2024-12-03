import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import SourceCode from "../../components/SourceCode";
import { splitUntilSecondSlash } from "../../utils/methods";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import {
  COVERAGE_API_BASE_URL,
  FILE_MANAGER_API_BASE_URL,
} from "../../utils/constants";
import Splash from "../../components/Splash";
import ErrorAdvice from "../../components/ErrorAdvice";
import CoverageSummary from "../../components/CoverageSummary";
import { FileCoverageInterface } from "../../types/interfaces";
import FileMenuSideBar from "../../components/FilesSideBar/FileMenuSideBar";

const FileCoverage: React.FC = () => {
  const { uploadedKeys } = useUploadedKeys();
  const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const [apiFileUrl, setApiFileUrl] = useState<string | null>(null);
  const [filecoverageData, setFileCoverageData] =
    useState<FileCoverageInterface | null>(null);

  const { data, loading, error } = useFetch<string>(apiUrl);
  const {
    data: dataFile,
    loading: loadingFile,
    error: errorFile,
  } = useFetch<string>(apiFileUrl);

  useEffect(() => {
    if (uploadedKeys && uploadedKeys.length > 0) {
      setApiUrl(
        `${FILE_MANAGER_API_BASE_URL}/fileManager/files?projectId=${uploadedKeys}`
      );
    }
  }, [uploadedKeys]);

  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data);
      setSelectedFilePath(splitUntilSecondSlash(dataJson[20]));
    }
  }, [data]);

  useEffect(() => {
    if (selectedFilePath) {
      setApiFileUrl(
        `${COVERAGE_API_BASE_URL}/coverage/file?path=${selectedFilePath}`
      );
    }
  }, [selectedFilePath]);

  useEffect(() => {
    if (dataFile) {
      const dataJson = JSON.parse(dataFile) as FileCoverageInterface;
      setFileCoverageData(dataJson);
    }
  }, [dataFile]);

  if (loading || loadingFile)
    return <Splash splashMessage="Getting file info..." />;
  if (error || errorFile) return <ErrorAdvice />;

  return (
    <Box display={"flex"} width={"100%"}>
      <Container component={"section"}>
        {selectedFilePath && filecoverageData ? (
          <Box flex={1} width={"100%"}>
            <Typography variant="subtitle1">{selectedFilePath}</Typography>
            <Box>
              <CoverageSummary
                fileCoverage={filecoverageData.coveragePercentage}
                methodCoverage={filecoverageData.methodCoverage}
                linesOfCode={filecoverageData.linesCode}
              />
            </Box>
            <SourceCode
              filePath={selectedFilePath}
              uncoveredLines={filecoverageData?.uncoveredLines}
            />
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

      {data && (
        <Box maxWidth={350} width={300} maxHeight={"100vh"}>
          <FileMenuSideBar
            proyectFiles={JSON.parse(data)}
            optionOnClick={setSelectedFilePath}
          />
        </Box>
      )}
    </Box>
  );
};

export default FileCoverage;
