import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import SourceCode from "../../components/SourceCode";
import { splitUntilSecondSlash } from "../../utils/methods";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import {
  COVERAGE_API_BASE_URL,
} from "../../utils/constants";
import Splash from "../../components/Splash";
import ErrorAdvice from "../../components/ErrorAdvice";
import CoverageSummary from "../../components/CoverageSummary";
import { FileCoverageInterface } from "../../types/interfaces";

interface FileCoverageBodyPromps {
    data: string | null,
    loading: boolean,
    error: string | null
    selectedFilePath: string | null
    setSelectedFilePath: (data:string) => void
}

const FileCoverageBody: React.FC<FileCoverageBodyPromps> = ({ data, loading, error, selectedFilePath, setSelectedFilePath }) => {
  const { uploadedKeys } = useUploadedKeys();
  
  const [apiFileUrl, setApiFileUrl] = useState<string | null>(null);
  const [fileCoverageData, setFileCoverageData] =
    useState<FileCoverageInterface | null>(null);

  const {
    data: dataFile,
    loading: loadingFile,
    error: errorFile,
  } = useFetch<string>(apiFileUrl);


  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data);
      setSelectedFilePath(splitUntilSecondSlash(dataJson[5]));
    }
  }, [data]);


  useEffect(() => {
    if (selectedFilePath) {
      setApiFileUrl(
        `${COVERAGE_API_BASE_URL}/coverage/project/${uploadedKeys}/?filePath=/${selectedFilePath}`
      );
    }
  }, [selectedFilePath, uploadedKeys]);

  useEffect(() => {
    if (dataFile) {
      const dataJson = JSON.parse(dataFile) as FileCoverageInterface;
      setFileCoverageData(dataJson);
    }
  }, [dataFile]);

  if (error) return <ErrorAdvice />;
  if (loading || loadingFile)
    return <Splash splashMessage="Getting file info..." />;

  return (
    
    <Container component={"section"}>
        <Box flex={1} width={"100%"}>
            <Typography variant="subtitle1">{selectedFilePath}</Typography>
            {errorFile ? (
            <Typography
                variant="subtitle1"
                color="warning"
                mt={4}
                textAlign={"center"}
            >
                Could not get coverage of this file. Select another one.
            </Typography>
            ) : (
            selectedFilePath &&
            fileCoverageData && (
                <>
                <Box>
                    <CoverageSummary
                    fileCoverage={parseFloat(
                        fileCoverageData.coveragePercentage.toFixed(2)
                    )}
                    methodCoverage={parseFloat(
                        fileCoverageData.methodCoverage.toFixed(2)
                    )}
                    linesOfCode={fileCoverageData.linesCode}
                    />
                </Box>
                <SourceCode
                    filePath={selectedFilePath}
                    uncoveredLines={fileCoverageData?.uncoveredLines}
                />
                </>
            )
            )}
        </Box>
    </Container>
    
  );
};

export default FileCoverageBody;
