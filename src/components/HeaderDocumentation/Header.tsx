import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import HeaderButton from "./HeaderButton";

const HeaderDocumentation: React.FC = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      bgcolor="#12141D"
      height="75px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="30px"
      zIndex={1000}
      position={"fixed"}
    >
      <Box
        display="flex"
        gap={!isSmallScreen ? "70px" : "20px"}
        alignItems="center"
      >
        <Typography
          color="#ffffff"
          fontSize={!isSmallScreen ? "45px" : "30px"}
          fontWeight="bold"
        >
          Argos
        </Typography>
      </Box>
      <HeaderButton
        text="Analyze New Project"
        icon={<ExitToAppIcon sx={{ color: "white" }} />}
        isSelected={false}
        onClick={() => {
          navigate("project-setup");
        }}
        isSmallScreen={isSmallScreen}
      />
    </Box>
  );
};

export default HeaderDocumentation;
