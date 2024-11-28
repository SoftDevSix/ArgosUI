import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Splash from "../../components/Splash";
import ResultLabel from "../../components/CoverageResults/ResultLabel";
import Grid from "@mui/material/Grid2";
import CodeRating from "../../components/CoverageResults/CodeRating";
import CoveragePercentage from "../../components/CoverageResults/CoveragePercentage";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";

const CoverageResults: React.FC = () => {
  const { uploadedKeys } = useUploadedKeys();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Here will be implemented the fetch to get the coverage report of a project
  }, [uploadedKeys]);

  return (
    <>
      {loading ? (
        <Splash splashMessage="Getting results..." />
      ) : (
        <Container>
          <div>
            <Typography variant="h1">Coverage Results</Typography>
            <Grid
              container
              minHeight={"50vh"}
              alignItems={"center"}
              spacing={4}
              mt={4}
            >
              <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                <ResultLabel passed={true} />
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CodeRating codeRating="A" requiredRating="B" />
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CoveragePercentage
                  currentPercentage={75.0}
                  requiredPercentage={65.0}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      )}
    </>
  );
};

export default CoverageResults;
