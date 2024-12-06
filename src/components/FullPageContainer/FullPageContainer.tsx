import React from "react";
import styles from "./fullPageContainer.module.css";

interface FullPageContainerProps {
  children?: React.ReactNode;
}

const FullPageContainer: React.FC<FullPageContainerProps> = ({ children }) => {
  return <div className={styles.fullPageContainer}>{children}</div>;
};

export default FullPageContainer;
