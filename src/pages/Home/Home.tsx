import { Card, Typography } from "@mui/material";
import React from "react";
import style from './Home.module.css';
import SourceCode from "../../components/SourceCode/SourceCode";
import CoverageSummary from "../../components/CoverageSummary";

const Home: React.FC = () => {
  return (
    <Card>
      <div className={style.metricsContainer}>
        <SourceCode fileName="File Example"/>
      </div>
      
    </Card>
  );
};

export default Home;
