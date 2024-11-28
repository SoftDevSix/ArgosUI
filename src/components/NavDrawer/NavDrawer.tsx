import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton, useMediaQuery, Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerContent from "./DrawerContent";

const DRAWER_WIDTH = 230;

interface NavDrawerProps {
  projectName: string;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ projectName = "" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {!isLargeScreen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 1, mt: 2, position: "fixed" }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box>
        <CssBaseline />
        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
            },
          }}
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={isLargeScreen || mobileOpen}
          onClose={handleDrawerToggle}
          anchor="left"
        >
          <DrawerContent projectName={projectName} />
        </Drawer>
      </Box>
    </>
  );
};

export default NavDrawer;
