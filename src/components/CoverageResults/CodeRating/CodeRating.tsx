import React, { useMemo } from "react";
import { CodeRatingType } from "../../../types/types";
import { Avatar, Typography } from "@mui/material";
import { COLORS } from "../../../utils/styleConstants";
import CenteredContainer from "../../CenteredContainer";

interface CodeRatingProps {
  codeRating: CodeRatingType;
  requiredRating: CodeRatingType;
}

const CodeRating: React.FC<CodeRatingProps> = ({
  codeRating,
  requiredRating,
}) => {
  const backgroundColor = useMemo(
    () => (codeRating <= requiredRating ? COLORS.SUCCESS : COLORS.ERROR),
    [codeRating, requiredRating]
  );

  return (
    <CenteredContainer>
      <Avatar sx={{ width: 300, height: 300, backgroundColor }} aria-label="code-rating-avatar">
        <Typography variant="h1">{codeRating}</Typography>
      </Avatar>
      <Typography mt={2} variant="subtitle1" color="secondary">
        Code Rating
      </Typography>
      <Typography mt={1}>{`Rating Required: ${requiredRating}`}</Typography>
    </CenteredContainer>
  );
};

export default CodeRating;
