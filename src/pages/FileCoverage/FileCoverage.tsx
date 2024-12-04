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
import { useNavigate } from "react-router-dom";
import { PageNames } from "../../utils/pageNames";
import FileMenuSideBar from "../../components/FilesSideBar";

const FileCoverage: React.FC = () => {
  const navigate = useNavigate();
  const { uploadedKeys, hasUploadedKeys } = useUploadedKeys();
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
    } else if (!hasUploadedKeys) navigate(`/${PageNames.PROJECT_SETUP}`);
  }, [uploadedKeys, hasUploadedKeys, navigate]);

  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data);
      setSelectedFilePath(splitUntilSecondSlash(dataJson[20]));
    }
  }, [data]);

  console.log(apiUrl);

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

  if (loading) return <Splash splashMessage="Getting files info..." />;
  if (error || errorFile) return <ErrorAdvice />;

  return (
    <Box display={"flex"} width={"100%"}>
      {data && (
        <FileMenuSideBar
          projectFiles={JSON.parse(data)}
          basePath={"projects/" + uploadedKeys}
          setSelectedFilePath={setSelectedFilePath}
        />
      )}
      {loadingFile ? (
        <Splash splashMessage="Getting file info..." />
      ) : (
        <Container component={"section"}>
          {selectedFilePath && filecoverageData ? (
            <Box flex={1}>
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
      )}
    </Box>
  );
};

export default FileCoverage;
