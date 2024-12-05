import React, { createContext, useEffect, useMemo, useState } from "react";
import { PROJECT_NAME_KEY, UPLOADED_KEY } from "../utils/constants";

type UploadedKeysContextType = {
  uploadedKeys: string;
  setUploadedKeys: (keys: string) => void;
  hasUploadedKeys: boolean;
  projectName: string;
  setProjectName: (name: string) => void;
};

const UploadedKeysContext = createContext<UploadedKeysContextType | undefined>(
  undefined
);

export const UploadedKeysProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedKeys, setUploadedKeys] = useState<string>("");
  const [hasUploadedKeys, setHasUploadedKeys] = useState<boolean>(true);
  const [projectName, setProjectName] = useState<string>("");

  useEffect(() => {
    const storedKeys = localStorage.getItem(UPLOADED_KEY);
    if (storedKeys && storedKeys !== "") {
      setUploadedKeys(storedKeys);
      setHasUploadedKeys(true);
    } else {
      setHasUploadedKeys(false);
    }
  }, []);

  useEffect(() => {
    if (uploadedKeys.length > 0) {
      localStorage.setItem(UPLOADED_KEY, uploadedKeys);
    } else {
      localStorage.removeItem(UPLOADED_KEY);
    }
  }, [uploadedKeys]);

  useEffect(() => {
    const storedProjectName = localStorage.getItem(PROJECT_NAME_KEY);
    if (storedProjectName && storedProjectName !== "") {
      setProjectName(storedProjectName);
    }
  }, []);

  useEffect(() => {
    if (projectName.length > 0) {
      localStorage.setItem(PROJECT_NAME_KEY, projectName);
    } else {
      localStorage.removeItem(PROJECT_NAME_KEY);
    }
  }, [projectName]);

  const value = useMemo(
    () => ({
      uploadedKeys,
      setUploadedKeys,
      hasUploadedKeys,
      projectName,
      setProjectName,
    }),
    [uploadedKeys, hasUploadedKeys, projectName]
  );

  return (
    <UploadedKeysContext.Provider value={value}>
      {children}
    </UploadedKeysContext.Provider>
  );
};

export default UploadedKeysContext;
