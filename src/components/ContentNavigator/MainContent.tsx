import React from "react";
import { Box, Typography } from "@mui/material";

interface MainContentProps {
  sections: { id: string; title: string; content: React.ReactNode }[];
  contentRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

const MainContent: React.FC<MainContentProps> = ({ sections, contentRefs }) => {
  return (
    <Box width="80%" overflow="auto" p={4}>
      {sections.map((section) => (
        <Box
          key={section.id}
          id={section.id}
          ref={(el: HTMLDivElement | null) =>
            (contentRefs.current[section.id] = el)
          }
          mb={4}
        >
          <Typography variant="h4" gutterBottom>
            {section.title}
          </Typography>
          <Box>{section.content}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default MainContent;
