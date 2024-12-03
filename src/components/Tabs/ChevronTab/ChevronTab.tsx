import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import styles from "./chevrontab.module.css";
import { COLORS } from "../../../utils/styleConstants";

interface ChevronTabProps {
  tabName: string;
  onClick: () => void;
  description?: string;
  IconComponent?: React.ElementType;
}

const ChevronTab: React.FC<ChevronTabProps> = ({ tabName, description, onClick, IconComponent }) => {
  return (
      <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding={2}
          borderRadius={4}
          bgcolor={COLORS.PRIMARY_DEFAULT}
          onClick={onClick}
          style={{ cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        <Box display="flex" alignItems="center">
          {IconComponent && (
              <Box mr={2}>
                <IconComponent style={{ fontSize: 32, color: "#fff" }} />
              </Box>
          )}
          <Box>
            <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: "#fff" }}
                className={styles.tabTitle}
            >
              {tabName}
            </Typography>
            {description && (
                <Typography
                    variant="body2"
                    style={{ color: "#ccc" }}
                    className={styles.tabDescription}
                >
                  {description}
                </Typography>
            )}
          </Box>
        </Box>
        <IconButton
            style={{ backgroundColor: "transparent" }}
            color="inherit"
            aria-label="navigate"
        >
          <ChevronRight style={{ fontSize: 26, color: "#fff" }} />
        </IconButton>
      </Box>
  );
};

export default ChevronTab;
