import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Typography,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../utils/styleConstants";
import styles from "./drawerContent.module.css";
import { MenuOption } from "../../../types/interfaces";
import { menuOptionList } from "../../../utils/drawerMenuOptions";

interface DrawerContentProps {
  projectName: string;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ projectName = "" }) => {
  const [selectedOption, setSelectedOption] = useState("Project Coverage");
  const navigate = useNavigate();

  const handleOptionClick = (option: MenuOption) => {
    setSelectedOption(option.name);
    navigate(option.path);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box className={styles.drawerTitleContainer}>
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
                    selectedOption === option.name
                      ? COLORS.PRIMARY_HOVER
                      : "transparent",
                  "&:hover": {
                    backgroundColor:
                      selectedOption === option.name
                        ? COLORS.PRIMARY_HOVER
                        : "#1a1b25",
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

      <Box className={styles.drawerExitContainer}>
        <ListItemButton data-testid="exit-button" onClick={handleLogout}>
          <ListItemIcon sx={{ color: COLORS.ERROR }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default DrawerContent;
