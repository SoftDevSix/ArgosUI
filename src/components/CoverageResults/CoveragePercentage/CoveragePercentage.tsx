import React, { useMemo } from "react";
import { CircularProgress, Typography } from "@mui/material";
import CenteredContainer from "../../CenteredContainer";

interface CoveragePercentageProps {
  currentPercentage: number;
  requiredPercentage: number;
}

const CoveragePercentage: React.FC<CoveragePercentageProps> = ({
  currentPercentage,
  requiredPercentage,
}) => {
    const currentPercentageRounded = currentPercentage.toFixed(2)
    const requiredPercentageRounded  = requiredPercentage.toFixed(2)

  const colorProgress = useMemo(
    () => (currentPercentage >= requiredPercentage ? "success" : "error"),
    [currentPercentage, requiredPercentage]
  );

  return (
    <CenteredContainer>
      <CircularProgress
        size={300}
        color={colorProgress}
        variant="determinate"
        value={currentPercentage}
        aria-label="coverage-percentage"
      />
      <Typography mt={2} variant="subtitle1" color="secondary">
        {`${currentPercentageRounded}% - Coverage`}
      </Typography>
      <Typography mt={1}>{`${requiredPercentageRounded}% Required`}</Typography>
    </CenteredContainer>
  );
};

export default CoveragePercentage;
