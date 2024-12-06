import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { COLORS } from "../../utils/styleConstants";

interface ContentbarProps {
  sections: { id: string; title: string }[];
  onScrollToSection: (id: string) => void;
}

const styles = {
  container: {
    width: "20%",
    color: COLORS.NEUTRAL_WHITE,
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
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (id: string) => {
    setSelectedSection(id);
    onScrollToSection(id);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
        Contents
      </Typography>
      <List>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton onClick={() => handleSectionClick(section.id)}>
              <ListItemText
                primary={section.title}
                style={{
                  borderBottom:
                    selectedSection === section.id ? "2px solid #e3e" : "none",
                  display: "inline",
                  flex: "none",
                  paddingBottom: selectedSection === section.id ? 1 : 0,
                  color:
                    selectedSection === section.id
                      ? "#FFFFFF"
                      : COLORS.GREY_DISABLED,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Contentbar;
