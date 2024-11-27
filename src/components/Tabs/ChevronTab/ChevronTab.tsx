import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import styles from "./chevrontab.module.css";
import { COLORS } from "../../../utils/styleConstants";

interface ChevronTabProps {
  tabName: string;
  onClick: () => void;
}

const ChevronTab: React.FC<ChevronTabProps> = ({ tabName, onClick }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%" 
      onClick={onClick}
    >
      <Typography
        className={styles.tabLabel}
        minWidth={100}
        flexGrow={1} 
      >
        {tabName}
      </Typography>
      <IconButton
        style={{ backgroundColor: COLORS.PRIMARY_HOVER, borderRadius: 0 }}
        color="error"
        aria-label="delete"
      >
        <ChevronRight style={{ fontSize: 26, color: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default ChevronTab;
