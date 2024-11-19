import React from "react";
import { Box, Typography } from "@mui/material";
import CustomPieChart from "../../CustomPieChart";

interface CoverageDetailsProps {
    colors: string[];
    summaryData: { value: number; label: string }[];
    pieChartData: { value: number; label: string; color: string }[];
}

const CoverageDetails: React.FC<CoverageDetailsProps> = ({
                                                             colors,
                                                             summaryData,
                                                             pieChartData,
                                                         }) => (
    <Box sx={{ display: "flex", gap: 4, mb: 2 }}>
        <Box>
            <Typography sx={{ color: colors[0] }}>
                Overall Coverage: {summaryData[0]?.value}%
            </Typography>
            <Typography sx={{ color: colors[1] }}>
                Line Coverage: {summaryData[1]?.value}%
            </Typography>
            <Typography sx={{ color: colors[2] }}>
                Method Coverage: {summaryData[2]?.value}%
            </Typography>
            <Typography sx={{ color: colors[3] }}>
                Class Coverage: {summaryData[3]?.value}%
            </Typography>
        </Box>
        <Box>
            <CustomPieChart data={pieChartData} />
        </Box>
    </Box>
);

export default CoverageDetails;
