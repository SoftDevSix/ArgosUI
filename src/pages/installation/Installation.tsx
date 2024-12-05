import React from "react";
import styles from "./InstallationPage.module.css";
import DocumentationSideBar from "../../components/DocumentationSideBar/DocumentationSidebar";

const InstallationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <DocumentationSideBar />
      <div className={styles.content}>
        <h1 className={styles.title}>Installation</h1>
        <p className={styles.text}>Download the .jar archive from:</p>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/educational-digital-nexus.appspot.com/o/ArgosInstrumentation-0.0.1-SNAPSHOT-all.jar?alt=media&token=a0573785-6019-4bd6-ac98-823feb816f4e"
          className={styles.downloadButton}
          download
        >
          Download
        </a>
        <p className={styles.text}>
          Copy/Move the .jar file to your project's root directory.
        </p>
      </div>
    </div>
  );
};

export default InstallationPage;
