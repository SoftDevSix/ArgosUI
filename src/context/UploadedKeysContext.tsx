import React, { createContext, useEffect, useState } from "react";

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
    const storedKeys = localStorage.getItem("uploadedKeys");
    if (storedKeys) {
      setUploadedKeys(JSON.parse(storedKeys));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadedKeys", JSON.stringify(uploadedKeys));
  }, [uploadedKeys]);

  return (
    <UploadedKeysContext.Provider value={{ uploadedKeys, setUploadedKeys }}>
      {children}
    </UploadedKeysContext.Provider>
  );
};

export default UploadedKeysContext;
