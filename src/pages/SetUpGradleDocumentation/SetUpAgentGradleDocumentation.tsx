import React from "react";
import image1 from "../../assets/images/gradle/Step-01 Gradle.png";
import image2 from "../../assets/images/gradle/Step-02 Gradle.png";
import image3 from "../../assets/images/gradle/Step-03 Gradle.png";
import image4 from "../../assets/images/gradle/Step-04 Gradle.png";
import image5 from "../../assets/images/gradle/Step-05 Gradle.png";
import image6 from "../../assets/images/gradle/Step-06 Gradle.png";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import DocumentationSideBar from "../../components/DocumentationSideBar";

const SetupAgentGradleDocumentation: React.FC = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          Learn how to set up the Argos Agent in Gradlew for your project. This
          guide includes step-by-step instructions.
        </p>
      ),
    },
    {
      id: "step-1",
      title: "Add the Argos Agent",
      content: (
        <>
          <p>Move/copy the jar to the project's principal directory.</p>
          <img
            src={image1}
            alt="Jar Position Maven"
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
        <ul>
          <img
            src={image6}
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
            Configure in <code>build.gradle.kts</code> the following lines:
          </li>
          <img
            src={image2}
            alt="Jar Position Maven"
            style={{
              maxWidth: "100%",
              marginTop: "16px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <li>
            <span>
              After the setup, just run the tests normally using JDK or with the
            </span>
            <code>{" ./gradlew test "}</code>
            <span>command.</span>
          </li>
        </ul>
      ),
    },
    {
      id: "console-results",
      title: "Console Results",
      content: (
        <>
          <img
            src={image4}
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
            In the console, you can see all the lines of code covered as well as
            those not covered depending on the test that has been performed.
            Additionally, you can see which methods and classes were covered.
          </p>
        </>
      ),
    },
    {
      id: "json-results",
      title: "Json Results",
      content: (
        <ul>
          <img
            src={image3}
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
            The JSON file, named <code>coverage.json</code>, is generated in the
            principal directory of the project. This file contains all the
            coverage information of the tests that were run.
          </li>
          <li>
            The report is generated inside the JSON file. You can format it
            using:{" "}
            <a
              href="https://jsonformatter.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              JSON Formatter
            </a>
          </li>
          <img
            src={image5}
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

export default SetupAgentGradleDocumentation;
