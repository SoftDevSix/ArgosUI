import React, { createContext, useEffect, useState, useContext } from "react";
import { UPLOADED_KEY } from "../utils/constants";

type UploadedKeysContextType = {
  uploadedKeys: Record<string, string>;
  setUploadedKeys: (keys: Record<string, string>) => void;
  hasUploadedKeys: boolean;
  checkedKeys: boolean;
};

const UploadedKeysContext = createContext<UploadedKeysContextType | undefined>(
  undefined
);

export const UploadedKeysProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedKeys, setUploadedKeys] = useState<Record<string, string>>({});
  const [hasUploadedKeys, setHasUploadedKeys] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState(false);

  useEffect(() => {
    const storedKeys = localStorage.getItem(UPLOADED_KEY);
    if (storedKeys) {
      setUploadedKeys(JSON.parse(storedKeys));
      setHasUploadedKeys(true);
    }
    setCheckedKeys(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(UPLOADED_KEY, JSON.stringify(uploadedKeys));
    setHasUploadedKeys(Object.keys(uploadedKeys).length > 0);
  }, [uploadedKeys]);

  return (
    <UploadedKeysContext.Provider
      value={{ uploadedKeys, setUploadedKeys, hasUploadedKeys, checkedKeys }}
    >
      {children}
    </UploadedKeysContext.Provider>
  );
};

export const useUploadedKeys = () => {
  const context = useContext(UploadedKeysContext);
  if (!context) {
    throw new Error("useUploadedKeys must be used inside UploadedKeysProvider");
  }
  return context;
};

export default UploadedKeysContext;
