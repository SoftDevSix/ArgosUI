import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Typography, IconButton, useMediaQuery, Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const drawerWidth = 230;

interface MenuOption {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const menuOptionList: MenuOption[] = [
  {
    name: "Project Coverage",
    icon: <PieChartIcon />,
    path: "/project-coverage",
  },
  {
    name: "File Coverage",
    icon: <PieChartIcon />,
    path: "/file-coverage",
  },
];

export default function NavDrawer({ projectName = "" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<string>("Project Coverage");
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOptionClick = (option: MenuOption) => {
    setSelectedOption(option.name);
    navigate(option.path);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          backgroundColor: "#12141D",
        }}
      >
        <Typography fontWeight="bold" fontSize={32}>
          Argos
        </Typography>
      </Box>
      <Toolbar />
      <Typography data-testid="project-name" fontSize={24} align="center">
        {projectName}
      </Typography>
      <Toolbar />

      <Box sx={{ flexGrow: 1 }}>
        <List>
          {menuOptionList.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton
                data-testid={`menu-option-${option.name}`}
                onClick={() => handleOptionClick(option)}
                sx={{
                  backgroundColor:
                    selectedOption === option.name ? "#12141D" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      selectedOption === option.name ? "#12141D" : "#1a1b25",
                  },
                }}
              >
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          color: "white",
        }}
      >
        <ListItemButton
          data-testid="exit-button"
          onClick={handleLogout}
          sx={{
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {!isLargeScreen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 1 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isLargeScreen ? "permanent" : "temporary"}
        open={isLargeScreen || mobileOpen}
        onClose={handleDrawerToggle}
        anchor="left"
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
