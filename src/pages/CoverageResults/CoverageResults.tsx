import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Splash from "../../components/Splash";
import ResultLabel from "../../components/CoverageResults/ResultLabel";
import Grid from "@mui/material/Grid2";
import CodeRating from "../../components/CoverageResults/CodeRating";
import CoveragePercentage from "../../components/CoverageResults/CoveragePercentage";

const CoverageResults: React.FC = () => {
  const { coverageId } = useParams<{ coverageId: string }>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [coverageId]);

  return (
    <Container>
      {loading ? (
        <Splash splashMessage="Getting results..." />
      ) : (
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
      )}
    </Container>
  );
};

export default CoverageResults;
