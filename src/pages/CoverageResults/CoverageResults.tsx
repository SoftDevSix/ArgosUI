import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Splash from "../../components/Splash";
import ResultLabel from "../../components/CoverageResults/ResultLabel";
import Grid from "@mui/material/Grid2";
import CodeRating from "../../components/CoverageResults/CodeRating/CodeRating";

const CoverageResults: React.FC = () => {
  const { coverageId } = useParams<{ coverageId: string }>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false)
  }, [coverageId]);

  return (
    <Container>
      {loading ? (
        <Splash splashMessage="Getting results..." />
      ) : (
        <div>
          <Typography variant="h1">Coverage Results</Typography>
          <Grid container minHeight={"60vh"} alignItems={"center"} spacing={4}>
            <Grid size={{ xs: 12, md: 12, lg: 4 }}>
              <ResultLabel />
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 4 }}>
              <CodeRating codeRating="A" requiredRating="B" />
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default CoverageResults;
