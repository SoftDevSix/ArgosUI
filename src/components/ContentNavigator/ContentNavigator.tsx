import React, { useRef } from "react";
import { Box } from "@mui/material";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

interface ContentNavigatorProps {
  sections: { id: string; title: string; content: React.ReactNode }[];
}

const ContentNavigator: React.FC<ContentNavigatorProps> = ({ sections }) => {
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (id: string) => {
    const section = contentRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box display="flex" height="100vh">
      <MainContent sections={sections} contentRefs={contentRefs} />
      <Sidebar sections={sections.map(({ id, title }) => ({ id, title }))} onScrollToSection={scrollToSection} />
    </Box>
  );
};

export default ContentNavigator;
