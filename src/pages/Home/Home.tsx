import { Typography } from "@mui/material";
import React from "react";
import CoverageSummary from "../../components/CoverageSummary/CoverageSummary.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Typography>Home Page</Typography>
        <CoverageSummary />
    </div>
  );
};

export default Home;
