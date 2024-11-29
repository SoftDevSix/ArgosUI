import React, { createContext, useEffect, useState } from "react";
import { UPLOADED_KEY } from "../utils/constants";

type UploadedKeysContextType = {
  uploadedKeys: string;
  setUploadedKeys: (keys: string) => void;
};

const UploadedKeysContext = createContext<UploadedKeysContextType | undefined>(
  undefined
);

export const UploadedKeysProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedKeys, setUploadedKeys] = useState<string>("");

  useEffect(() => {
    const storedKeys = localStorage.getItem(UPLOADED_KEY);
    if (storedKeys) {
      setUploadedKeys(storedKeys);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(UPLOADED_KEY, JSON.stringify(uploadedKeys));
  }, [uploadedKeys]);

  return (
    <UploadedKeysContext.Provider value={{ uploadedKeys, setUploadedKeys }}>
      {children}
    </UploadedKeysContext.Provider>
  );
};

export default UploadedKeysContext;
