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
      console.log(storedKeys)
      setUploadedKeys(storedKeys);
    }
  }, []);

  useEffect(() => {
    if(uploadedKeys.length > 0)
      localStorage.setItem(UPLOADED_KEY, uploadedKeys);
  }, [uploadedKeys]);

  return (
    <UploadedKeysContext.Provider value={{ uploadedKeys, setUploadedKeys }}>
      {children}
    </UploadedKeysContext.Provider>
  );
};

export default UploadedKeysContext;
