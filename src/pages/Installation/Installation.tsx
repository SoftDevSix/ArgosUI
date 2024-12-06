import React from "react";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import DocumentationSideBar from "../../components/DocumentationSideBar";
import styles from "./InstallationPage.module.css";

const InstallationPage: React.FC = () => {
  const sections = [
    {
      id: "download",
      title: "Download",
      content: (
        <>
          <p className={styles.text}>Download the .jar archive from:</p>
          <div className={styles.downloadContainer}>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/educational-digital-nexus.appspot.com/o/ArgosInstrumentation-0.0.1-SNAPSHOT-all.jar?alt=media&token=a0573785-6019-4bd6-ac98-823feb816f4e"
              className={styles.downloadButton}
              download
            >
              Download
            </a>
          </div>
        </>
      ),
    },
    {
      id: "move",
      title: "Move the File",
      content: (
        <>
          <p className={styles.text}>
            Copy or move the downloaded .jar file to the root directory of your
            project, you can use the following commands depending on your
            operating system:
          </p>
          <p className={styles.text}>
            <strong>Linux/macOS:</strong>
          </p>
          <pre className={styles.codeBlock}>
            <code>
              cp ~/Downloads/ArgosInstrumentation-0.0.1-SNAPSHOT-all.jar
              /path/to/your/project/
            </code>
          </pre>
          <p className={styles.text}>
            <strong>Windows (PowerShell):</strong>
          </p>
          <pre className={styles.codeBlock}>
            <code>
              Copy-Item
              "C:\Users\YourUser\Downloads\ArgosInstrumentation-0.0.1-SNAPSHOT-all.jar"
              "C:\path\to\your\project"
            </code>
          </pre>
        </>
      ),
    },
    {
      id: "extructure",
      title: "Structure Example",
      content: (
        <>
          <p className={styles.text}>
            Your project structure should look like this:
          </p>
          <pre className={styles.codeBlock}>
            {`/path/to/your/project/
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   └── test/
├── `}
            <span className={styles.highlight}>
              ArgosInstrumentation-0.0.1-SNAPSHOT-all.jar
            </span>
            {`
├── pom.xml
└── build.gradle`}
          </pre>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", height: "100%", overflow: "auto" }}>
      <DocumentationSideBar />
      <ContentNavigator sections={sections} />
    </div>
  );
};

export default InstallationPage;
