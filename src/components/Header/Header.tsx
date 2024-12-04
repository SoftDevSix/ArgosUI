import React, { ReactNode, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeaderButton from "./HeaderButton";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderOption {
  path: string;
  title: string;
  icon: ReactNode;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [optionSelected, setOptionSelected] = useState(
    location.pathname.slice(1)
  );

  console.log(location);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const headerOptions: HeaderOption[] = [
    {
      path: "coverage",
      title: "Project coverage",
      icon: <PieChartOutlineIcon sx={{ color: "white" }} />,
    },
    {
      path: "file",
      title: "File Coverage",
      icon: <FindInPageIcon sx={{ color: "white" }} />,
    },
  ];

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
        <Box display="flex" gap="5px" alignItems="center">
          {headerOptions.map((e) => (
            <HeaderButton
              text={e.title}
              icon={e.icon}
              isSelected={optionSelected === e.path}
              onClick={() => {
                setOptionSelected(e.path);
                navigate(e.path);
              }}
              isSmallScreen={isSmallScreen}
            />
          ))}
        </Box>
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

export default Header;
