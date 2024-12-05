import React from "react";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import DocumentationSideBar from "../../components/DocumentationSideBar/DocumentationSidebar";

const SetupAgentGradleDocumentation: React.FC = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          Learn how to set up the Argos Agent in Gradlew for your project this
          guide includes step-by-step instructions.
        </p>
      ),
    },
    {
      id: "step-1",
      title: "Add the Argos Agent",
      content: (
        <>
          <p>Move/copy the jar to the project principal directory</p>
          <img
            src="src/assets/images/gradle/Step-01 Gradle.png"
            alt="Jar Position maven"
            style={{
              maxWidth: "100%",
              marginTop: "16px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </>
      ),
    },
    {
      id: "step-2",
      title: "Configuration",
      content: (
        <>
          <ul>
            <img
              src="src/assets/images/gradle/Step-06 Gradle.png"
              alt="Jar Position maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <li>Configure in “build.gradle.kts” the following lines: </li>
            <img
              src="src/assets/images/gradle/Step-02 Gradle.png"
              alt="Jar Position maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <li>
              After the set up just run the tests normally using JDK or with
              <code>./gradlew test</code> command
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "console-results",
      title: "Console Results",
      content: (
        <>
          <img
            src="src/assets/images/gradle/Step-04 Gradle.png"
            alt="Jar Position maven"
            style={{
              maxWidth: "100%",
              marginTop: "16px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p>
            In the console we can see all the lines of code covered as well as
            those not covered depending on the test that has been performed, as
            well as we can see which methods were covered and which classes as
            well.
          </p>
        </>
      ),
    },
    {
      id: "json-results",
      title: "Json Results",
      content: (
        <>
          <img
            src="src/assets/images/gradle/Step-03 Gradle.png"
            alt="Jar Position maven"
            style={{
              maxWidth: "100%",
              marginTop: "16px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <ul>
            <li>
              The Json file is with the name "coverage.json" and generated in
              the principal directory of the project, this file contains all the
              information of the coverage of the test that was run.
            </li>
            <li>
              Report its generated inside json file that you can format using:{" "}
              <a
                href="https://jsonformatter.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Json Formater
              </a>
            </li>
            <img
              src="src/assets/images/gradle/Step-05 Gradle.png"
              alt="Jar Position maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </ul>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <DocumentationSideBar />
      <div style={{ flexGrow: 1, padding: "1rem", overflowY: "auto" }}>
        <ContentNavigator sections={sections} />
      </div>
    </div>
  );
};

export default SetupAgentGradleDocumentation;
