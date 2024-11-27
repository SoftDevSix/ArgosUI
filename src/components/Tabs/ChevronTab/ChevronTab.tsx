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
    <div onClick={onClick}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography className={styles.tabLabel} minWidth={100}>
          {tabName}
        </Typography>
        <IconButton
          style={{ backgroundColor: COLORS.PRIMARY_HOVER, borderRadius: 0 }}
          color="error"
          onClick={onClick}
          aria-label="delete"
        >
          <ChevronRight style={{ fontSize: 26, color: "#fff" }} />
        </IconButton>
        <IconButton></IconButton>
      </Box>
    </div>
  );
};

export default ChevronTab;
