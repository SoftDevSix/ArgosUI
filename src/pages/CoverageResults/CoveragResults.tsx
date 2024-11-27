import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Splash from "../../components/Splash";
import ResultLabel from "../../components/CoverageResults";
import Grid from "@mui/material/Grid2";

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
          <Grid container minHeight={"50vh"} alignItems={"center"}>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <ResultLabel />
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default CoverageResults;
