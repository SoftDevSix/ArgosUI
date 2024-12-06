import React from "react";
import image1 from "../../assets/images/overview/Overview 1.png";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import DocumentationSideBar from "../../components/DocumentationSideBar";
import HeaderDocumentation from "../../components/HeaderDocumentation";

const OverviewDocumentationPage: React.FC = () => {
  const sections = [
    {
      id: "overview",
      title: "Agent Description",
      content: (
        <>
          <p>
            Agent that provides a coverage report, giving information such as:
            covered statements uncovered statements, methods name, class name
            for example:
          </p>
          <img
            src={image1}
            alt="Over View"
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
              Formatted using:{" "}
              <a
                href="https://jsonformatter.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Json Formater
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "requirements",
      title: "Requirements",
      content: (
        <ul>
          <li>• JDK 17</li>
          <li>• JUnit testing</li>
        </ul>
      ),
    },
    {
      id: "limitations",
      title: "Limitations",
      content: (
        <ul>
          <li>• Works for Maven/Gradle Java projects</li>
        </ul>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", height: "100%", overflow: "auto" }}>
      <HeaderDocumentation />
      <DocumentationSideBar />
      <ContentNavigator sections={sections} />
    </div>
  );
};

export default OverviewDocumentationPage;
