import React, { useMemo } from "react";
import { Box, Typography, Divider } from "@mui/material";

import { COLORS } from "../../utils/styleConstants";
import CustomPieChart from "../CustomPieChart";
import CoverageDetails from "./CoverageDeatils/CoverageDetails.tsx";
import CoverageFilesList from "./CovergaeFilesList/CoverageFilesList.tsx";

interface CoverageSummaryProps {
  baseBranchName: string;
  summaryData: { value: number; label: string }[];
  comparisonData: { value: number; label: string }[];
  improvedFiles: string[];
  decreasedFiles: string[];
  coverageChange: number;
}

const CoverageSummary: React.FC<CoverageSummaryProps> = ({
  baseBranchName,
  summaryData,
  comparisonData,
  improvedFiles,
  decreasedFiles,
  coverageChange,
}) => {
  const colors = [COLORS.GREEN, COLORS.YELLOW, COLORS.ORANGE, COLORS.RED];

  const summaryDataWithColors = useMemo(
    () =>
      summaryData.map((item, index) => ({
        ...item,
        color: colors[index],
      })),
    [summaryData, colors]
  );

  const comparisonDataWithColors = useMemo(
    () =>
      comparisonData.map((item, index) => ({
        ...item,
        color: colors[index],
      })),
    [comparisonData, colors]
  );

  return (
    <Box
      sx={{
        maxWidth: 800,
        p: 2,
        bgcolor: COLORS.PRIMARY_DEFAULT,
        color: COLORS.NEUTRAL_WHITE,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: COLORS.SECONDARY, mb: 2 }}>
        Summary
      </Typography>

      <CoverageDetails
        colors={colors}
        summaryData={summaryData}
        pieChartData={summaryDataWithColors}
      />

      <Divider />

      <Typography variant="h6" sx={{ color: COLORS.SECONDARY, mb: 1 }}>
        Comparison with Base Branch ({baseBranchName})
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Box>
          <Typography sx={{ color: colors[0] }}>
            Coverage Change: {coverageChange > 0 ? "+" : ""}
            {coverageChange}%{" "}
            {coverageChange > 0 ? "(Improved)" : "(Decreased)"}
          </Typography>
          <Typography sx={{ color: colors[1] }}>
            Line Coverage: {comparisonData[1]?.value}%
          </Typography>

          <CoverageFilesList title="Files Improved" files={improvedFiles} />

          <CoverageFilesList
            title="Files Decreased Coverage"
            files={decreasedFiles}
          />
        </Box>
        <CustomPieChart data={comparisonDataWithColors} />
      </Box>
    </Box>
  );
};

export default CoverageSummary;
