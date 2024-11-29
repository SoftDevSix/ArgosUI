import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUploadedKeys } from "../../context/UploadedKeysContext";
import styles from "./WelcomePage.module.css";
import { PageNames } from "../../utils/pageNames";
import Splash from "../../components/Splash";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { hasUploadedKeys, checkedKeys } = useUploadedKeys();
  const [loading, setLoading] = useState(false);

  const handleAnalyzeClick = () => {
    setLoading(true);
    setTimeout(() => {
      if (hasUploadedKeys) {
        navigate(PageNames.COVERAGE_RESULTS);
      } else {
        navigate(PageNames.PROJECT_SETUP);
      }
    }, 1000);
  };

  if (loading || !checkedKeys) {
    return <Splash splashMessage="Checking project data..." />;
  }

  return (
    <div className={styles.container}>
      <img
        src="src/assets/images/welcome-background.png"
        alt="Welcome background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>Argos</h1>
      <p className={styles.subtitle}>The code quality tool for better code</p>
      <button className={styles.button} onClick={handleAnalyzeClick}>
        Analyze your project
      </button>
    </div>
  );
};

export default WelcomePage;
