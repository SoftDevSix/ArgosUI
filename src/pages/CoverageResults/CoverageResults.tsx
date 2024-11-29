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

const CoverageResults: React.FC = () => {
  const { uploadedKeys } = useUploadedKeys();

  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch<string>(apiUrl);
  const [coverageData, setCoverageData] = useState<ProjectCoverageInterface | null>(
    null
  );

  useEffect(() => {
    if (uploadedKeys && uploadedKeys.length > 0) {
      setApiUrl(`${COVERAGE_API_BASE_URL}/coverage/project/${uploadedKeys}`);
    }
  }, [uploadedKeys]);

  useEffect(() => {
    if (data) {
      const dataJson = JSON.parse(data) as ProjectCoverageInterface;
      setCoverageData(dataJson);
    }
  }, [data]);

  if (loading) return <Splash splashMessage="Getting results..." />;
  if (error || (!coverageData && !loading)) return <ErrorAdvice />;

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
              <ResultLabel passed={coverageData.projectStatus === "PASSED"} />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <CodeRating
                codeRating={coverageData.rating.actualRating}
                requiredRating={coverageData.rating.requiredCodeRating}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <CoveragePercentage
                currentPercentage={coverageData.coverage.actualCoverage}
                requiredPercentage={coverageData.coverage.requiredCoverage}
              />
            </Grid>
          </Grid>
        )}
      </div>
    </Container>
  );
};

export default CoverageResults;
