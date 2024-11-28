import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import styles from "./splash.module.css";

interface SplashProps {
  splashMessage?: string;
}

const Splash: React.FC<SplashProps> = ({ splashMessage = "Loading..." }) => {
  return (
    <div className={styles.splashContainer}>
      <CircularProgress size={160} color="success" />
      <Typography variant="subtitle1" mt={4}>
        {splashMessage}
      </Typography>
    </div>
  );
};

export default Splash;
