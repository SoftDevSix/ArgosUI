import React from "react";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import DocumentationSideBar from "../../components/DocumentationSideBar/DocumentationSidebar";

const SetUpMavenDocumentation: React.FC = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          Learn how to set up the Argos Agent in Maven for your project this
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
            src="src/assets/images/maven/Step-01 Maven.png"
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
      title: "Runner Configuration",
      content: (
        <>
          <ul>
            <li>• Go to the main menu to configure the runner </li>
            <li>• Go to run tab </li>
            <li>• Go to edit configuration </li>
            <img
              src="src/assets/images/maven/Step-02 Maven.png"
              alt="Edit Configuration maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <li>
              • Go to the plus icon of add new configuration and select the
              JUnit Option{" "}
            </li>
            <img
              src="src/assets/images/maven/Step-03 Maven.png"
              alt="Edit Configuration maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <li>
              • On this page we will configure the agent, select a name to give
              it like “JavaInstrumentation”{" "}
            </li>
            <img
              src="src/assets/images/maven/Step-04 Maven.png"
              alt="Edit Configuration maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <li>
              • Select the version 17 of java and select it to run on your local
              machine{" "}
            </li>
            <li>
              • Insert in macross -ea –javaagent : “the absolute path of where
              is the jar that you do in the second step” = "The package where is
              your Run" Select{" "}
            </li>
            <li>
              • Select All in directory in the resource type space to search for
              tests and enter the path where your tests run{" "}
            </li>
            <li>• Apply the configuration and run the new configuration</li>
            <img
              src="src/assets/images/maven/Step-05 Maven.png"
              alt="Edit Configuration maven"
              style={{
                maxWidth: "100%",
                marginTop: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </ul>
          <p>
            After run the configuration you have two results, the coverage json
            and a result in the console
          </p>
        </>
      ),
    },
    {
      id: "console-results",
      title: "Console Results",
      content: (
        <>
          <img
            src="src/assets/images/maven/Step-06 Maven.png"
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
            src="src/assets/images/maven/Step-07 Maven.png"
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
              src="src/assets/images/maven/Step-08 Maven.png"
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
    <div style={{ display: "flex", height: "100%", overflow: "auto" }}>
      <DocumentationSideBar />
      <ContentNavigator sections={sections} />
    </div>
  );
};

export default SetUpMavenDocumentation;
