import React, { createContext, useEffect, useState } from "react";
import { UPLOADED_KEY } from "../utils/constants";

type UploadedKeysContextType = {
  uploadedKeys: string;
  setUploadedKeys: (keys: string) => void;
  hasUploadedKeys: boolean;
};

const UploadedKeysContext = createContext<UploadedKeysContextType | undefined>(
  undefined
);

export const UploadedKeysProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedKeys, setUploadedKeys] = useState<string>("");
  const [hasUploadedKeys, setHasUploadedKeys] = useState<boolean>(false);

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

  return (
    <UploadedKeysContext.Provider
      value={{ uploadedKeys, setUploadedKeys, hasUploadedKeys }}
    >
      {children}
    </UploadedKeysContext.Provider>
  );
};

export default UploadedKeysContext;
