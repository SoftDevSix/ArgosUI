import React from "react";
import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts";

interface CustomPieChartProps {
    data: { value: number; label: string; color: string }[];
    height?: number;
    width?: number;
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({
                                                           data,
                                                           height = 150,
                                                           width = 150,
                                                       }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
                position: "relative",
                width: width + 60,
                height: height + 20,
            }}
        >
            <PieChart
                series={[
                    {
                        data,
                        outerRadius: 50,
                        highlightScope: { faded: "global", highlighted: "item" },
                        faded: { innerRadius: 5, additionalRadius: -5 },
                    },
                ]}
                height={height}
                width={width}
                slotProps={{
                    legend: { hidden: true },
                }}
            />
        </Box>
    );
};

export default CustomPieChart;
