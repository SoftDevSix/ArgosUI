import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import {COLORS} from "../../utils/styleConstants.ts";


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

          <PieChart
              series={[
                {
                  data: summaryData.map((item, index) => ({
                    ...item,
                    color: colors[index],
                  })),
                  outerRadius: 50,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: { innerRadius: 5, additionalRadius: -5 },
                },
              ]}
              height={150}
              width={150}
              slotProps={{
                legend: { hidden: true },
              }}
          />
        </Box>

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

            <Typography sx={{ color: COLORS.LINK, mt: 2, mb: 1 }}>
              Files Improved:
            </Typography>
            <List dense>
              {improvedFiles.length > 0 ? (
                  improvedFiles.map((file, index) => (
                      <ListItem key={index} sx={{ py: 0 }}>
                        <ListItemText
                            primary={`• ${file}`}
                            primaryTypographyProps={{ sx: { color: COLORS.NEUTRAL_WHITE } }}
                        />
                      </ListItem>
                  ))
              ) : (
                  <Typography sx={{ ml: 2 }}>• None</Typography>
              )}
            </List>

            <Typography sx={{ color: COLORS.LINK, mt: 1, mb: 1 }}>
              Files Decreased Coverage:
            </Typography>
            <List dense>
              {decreasedFiles.length > 0 ? (
                  decreasedFiles.map((file, index) => (
                      <ListItem key={index} sx={{ py: 0 }}>
                        <ListItemText
                            primary={`• ${file}`}
                            primaryTypographyProps={{ sx: { color: COLORS.NEUTRAL_WHITE } }}
                        />
                      </ListItem>
                  ))
              ) : (
                  <Typography sx={{ ml: 2 }}>• None</Typography>
              )}
            </List>
          </Box>

          <PieChart
              series={[
                {
                  data: comparisonData.map((item, index) => ({
                    ...item,
                    color: colors[index],
                  })),
                  outerRadius: 50,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: { innerRadius: 5, additionalRadius: -5 },
                },
              ]}
              height={150}
              width={150}
              slotProps={{
                legend: { hidden: true },
              }}
          />
        </Box>
      </Box>
  );
};

export default CoverageSummary;
