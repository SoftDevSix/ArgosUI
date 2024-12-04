import React from "react";
import UploadedKeysContext from "../../../context/UploadedKeysContext";

const MockUploadedKeysProvider: React.FC<{
  children: React.ReactNode;
  value: {
    uploadedKeys: string;
    hasUploadedKeys: boolean;
    setUploadedKeys: (keys: string) => void;
  };
}> = ({ children, value }) => {
  return (
    <UploadedKeysContext.Provider value={value}>
      {children}
    </UploadedKeysContext.Provider>
  );
};

export default MockUploadedKeysProvider;
