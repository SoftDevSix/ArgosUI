import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import styles from "./WelcomePage.module.css";
import { PageNames } from "../../utils/pageNames";
import Splash from "../../components/Splash";
import CustomButton from "../../components/Form/CustomButton";
import { COLORS } from "../../utils/styleConstants";
import image1 from "../../assets/images/welcome-background.png"

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { hasUploadedKeys, uploadedKeys } = useUploadedKeys();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (uploadedKeys && uploadedKeys.length > 0) {
      navigate(PageNames.COVERAGE_RESULTS);
    }
  }, [uploadedKeys, navigate]);

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

  if (loading) {
    return <Splash splashMessage="Checking project data..." />;
  }

  return (
    <div className={styles.container}>
      <img
        src={image1}
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
      <CustomButton
        onClick={handleAnalyzeClick}
        className={styles.button}
        style={{
          backgroundColor: COLORS.PASS_BUTTON,
          color: COLORS.NEUTRAL_BLACK,
        }}
      >
        Analyze your project
      </CustomButton>
    </div>
  );
};

export default WelcomePage;
