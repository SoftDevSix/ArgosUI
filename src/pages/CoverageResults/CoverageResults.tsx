import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Splash from "../../components/Splash";
import ResultLabel from "../../components/CoverageResults/ResultLabel";
import Grid from "@mui/material/Grid2";
import CodeRating from "../../components/CoverageResults/CodeRating";
import CoveragePercentage from "../../components/CoverageResults/CoveragePercentage";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import useFetch from "../../hooks/useFetch";
import { COVERAGE_API_BASE_URL } from "../../utils/constants";
import { ProjectCoverageInterface } from "../../types/interfaces";
import ErrorAdvice from "../../components/ErrorAdvice";
import { useNavigate } from "react-router-dom";
import { PageNames } from "../../utils/pageNames";

const CoverageResults: React.FC = () => {
  const navigate = useNavigate();
  const { uploadedKeys, hasUploadedKeys } = useUploadedKeys();

  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch<string>(apiUrl);
  const [coverageData, setCoverageData] =
    useState<ProjectCoverageInterface | null>(null);

  useEffect(() => {
    if (uploadedKeys && uploadedKeys.length > 0) {
      setApiUrl(`${COVERAGE_API_BASE_URL}/coverage/project/${uploadedKeys}`);
    } else if (!hasUploadedKeys) navigate(`/${PageNames.PROJECT_SETUP}`);
  }, [uploadedKeys, hasUploadedKeys, navigate]);

  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data) as ProjectCoverageInterface;
      setCoverageData(dataJson);
    }
  }, [data]);

  if (error || (!coverageData && !loading)) return <ErrorAdvice />;
  if (loading) return <Splash splashMessage="Getting results..." />;

  return (
    <Container>
      <div>
        <Typography variant="h1">Coverage Results</Typography>
        {coverageData && (
          <Grid
            container
            minHeight={"50vh"}
            alignItems={"center"}
            spacing={4}
            mt={4}
          >
            <Grid size={{ xs: 12, md: 12, lg: 4 }}>
              <ResultLabel passed={coverageData.status === "PASSED"} />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <CodeRating
                codeRating={coverageData.codeAnalysisResult.actualRating}
                requiredRating={coverageData.codeAnalysisResult.expectedRating}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <CoveragePercentage
                currentPercentage={coverageData.coverageResult.totalCoverage}
                requiredPercentage={
                  coverageData.coverageResult.requiredCoverage
                }
              />
            </Grid>
          </Grid>
        )}
      </div>
    </Container>
  );
};

export default CoverageResults;
