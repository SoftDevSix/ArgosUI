import React, { createContext, useEffect, useState } from "react";
import { UPLOADED_KEY } from "../utils/constants";

type UploadedKeysContextType = {
  uploadedKeys: Record<string, string>;
  setUploadedKeys: (keys: Record<string, string>) => void;
};

const UploadedKeysContext = createContext<UploadedKeysContextType | undefined>(
  undefined
);

export const UploadedKeysProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedKeys, setUploadedKeys] = useState<Record<string, string>>({});

  useEffect(() => {
    const storedKeys = localStorage.getItem(UPLOADED_KEY);
    if (storedKeys) {
      setUploadedKeys(JSON.parse(storedKeys));
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
