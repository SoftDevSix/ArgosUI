import React, { useRef } from "react";
import MainContent from "../MainContent/MainContent";
import Contentbar from "../Contentbar/Contentbar";

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
    <>
      <MainContent sections={sections} contentRefs={contentRefs} />
      <Contentbar
        sections={sections.map(({ id, title }) => ({ id, title }))}
        onScrollToSection={scrollToSection}
      />
    </>
  );
};

export default ContentNavigator;
