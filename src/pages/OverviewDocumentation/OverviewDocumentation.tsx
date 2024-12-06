import React from "react";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import image1 from "../../assets/images/overview/Overview 1.png";

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

  return <ContentNavigator sections={sections} />;
};

export default OverviewDocumentationPage;
