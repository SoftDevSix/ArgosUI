import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import FullPageContainer from "../FullPageContainer/FullPageContainer";

interface SplashProps {
  splashMessage?: string;
}

const Splash: React.FC<SplashProps> = ({ splashMessage = "Loading..." }) => {
  return (
    <FullPageContainer>
      <CircularProgress size={160} color="success" />
      <Typography variant="subtitle1" mt={4}>
        {splashMessage}
      </Typography>
    </FullPageContainer>
  );
};

export default Splash;
