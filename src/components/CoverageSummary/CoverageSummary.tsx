import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const CoverageSummary: React.FC = () => {
    const summaryData = [
        { value: 90, label: "Covered" },
        { value: 10, label: "Uncovered" },
    ];

    const comparisonData = [
        { value: 85, label: "Covered" },
        { value: 15, label: "Uncovered" },
    ];

    const improvedFiles = ["Name.java", "Name.java", "Name.json"];

    return (
        <Box sx={{ maxWidth: 800, p: 3, bgcolor: "#1e1e2f", color: "white", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ color: "#a892d4", mb: 2 }}>
                Summary
            </Typography>

            <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
                <Box>
                    <Typography sx={{ color: "#4caf50" }}>Overall Coverage: 90%</Typography>
                    <Typography sx={{ color: "#ffd700" }}>Line Coverage: 20%</Typography>
                    <Typography sx={{ color: "#ff9800" }}>Method Coverage: 10%</Typography>
                    <Typography sx={{ color: "#ff5722" }}>Class Coverage: 10%</Typography>
                </Box>

                <PieChart
                    series={[
                        {
                            data: summaryData,
                            outerRadius: 50,
                            highlightScope: { faded: "global", highlighted: "item" },
                            faded: { innerRadius: 30, additionalRadius: -30 },
                        },
                    ]}
                    height={150}
                    width={150}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                />
            </Box>
            
            <Typography variant="h6" sx={{ color: "#a892d4", mb: 2 }}>
                Comparison with Base Branch (develop)
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                    <Typography sx={{ color: "#4caf50" }}>Coverage Change: +5% (Improved)</Typography>
                    <Typography sx={{ color: "#ffd700" }}>Line Coverage: 10%</Typography>

                    <Typography sx={{ color: "#64b5f6", mt: 2, mb: 1 }}>Files Improved:</Typography>
                    <List dense>
                        {improvedFiles.map((file, index) => (
                            <ListItem key={index} sx={{ py: 0 }}>
                                <ListItemText
                                    primary={`• ${file}`}
                                    primaryTypographyProps={{ sx: { color: "white" } }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Typography sx={{ color: "#64b5f6", mt: 2, mb: 1 }}>Files Decreased Coverage:</Typography>
                    <Typography sx={{ ml: 2 }}>• None</Typography>
                </Box>

                <PieChart
                    series={[
                        {
                            data: comparisonData,
                            outerRadius: 50,
                            highlightScope: { faded: "global", highlighted: "item" },
                            faded: { innerRadius: 30, additionalRadius: -30 },
                        },
                    ]}
                    height={150}
                    width={150}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default CoverageSummary;
