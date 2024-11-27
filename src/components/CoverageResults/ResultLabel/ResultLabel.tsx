import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

interface ResultLabelProps {
  passed?: boolean;
}

const ResultLabel: React.FC<ResultLabelProps> = ({ passed }) => {
  const passedLabel = useMemo(() => (passed ? "PASSED" : "FAILED"), [passed]);
  const colorLabel = useMemo(() => (passed ? "primary" : "error"), [passed]);

  return (
    <Box>
      <Typography variant="subtitle2">This Project</Typography>
      <Box display={"flex"} alignItems={"flex-end"}>
        <Typography variant="h1" component={"p"} color={colorLabel}>
          {passedLabel}
        </Typography>
        <Typography ml={2} mb={1} variant="subtitle2">
          with
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultLabel;
