import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./DocumentationSideBar.module.css";

const DocumentationSideBar: React.FC = () => {
  const sections = [
    { title: "Overview", link: "/overview" },
    { title: "Installation of Agent", link: "/installation" },
    { title: "Setup Agent in Gradlew", link: "/gradle" },
    { title: "Setup Agent in Maven", link: "/maven" },
  ];

  const location = useLocation();

  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebarList}>
        {sections.map((section, index) => (
          <li key={index} className={styles.sidebarItem}>
            <Link
              to={section.link}
              className={`${styles.sidebarLink} ${
                location.pathname === section.link ? styles.active : ""
              }`}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentationSideBar;
