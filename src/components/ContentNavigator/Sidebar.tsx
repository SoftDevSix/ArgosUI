import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

interface SidebarProps {
  sections: { id: string; title: string }[];
  onScrollToSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, onScrollToSection }) => {
  return (
    <Box width="20%" bgcolor="#1a1a1a" color="white" p={2}>
      <Typography variant="h6" gutterBottom>
        Contents
      </Typography>
      <List>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton onClick={() => onScrollToSection(section.id)}>
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
