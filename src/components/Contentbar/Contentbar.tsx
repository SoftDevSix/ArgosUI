import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface ContentbarProps {
  sections: { id: string; title: string }[];
  onScrollToSection: (id: string) => void;
}

const styles = {
  container: {
    width: "20%",
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: 2,
  },
  title: {
    marginBottom: 2,
  },
};

const Contentbar: React.FC<ContentbarProps> = ({
  sections,
  onScrollToSection,
}) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
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

export default Contentbar;
