import React from "react";
import { Box, Typography } from "@mui/material";

interface MainContentProps {
  sections: { id: string; title: string; content: React.ReactNode }[];
  contentRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

const styles = {
  container: {
    flex: 1,
    overflow: "auto",
    padding: 4,
  },
  section: {
    marginBottom: 4,
  },
  title: {
    marginBottom: 2,
  },
};

const MainContent: React.FC<MainContentProps> = ({ sections, contentRefs }) => {
  return (
    <Box sx={styles.container}>
      {sections.map((section) => (
        <Box
          key={section.id}
          id={section.id}
          ref={(el: HTMLDivElement | null) =>
            (contentRefs.current[section.id] = el)
          }
          sx={styles.section}
        >
          <Typography variant="h2" gutterBottom sx={styles.title}>
            {section.title}
          </Typography>
          <Box>{section.content}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default MainContent;
