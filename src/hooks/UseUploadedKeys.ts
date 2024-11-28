import { useContext } from "react";
import UploadedKeysContext from "../context/UploadedKeysContext";

export const useUploadedKeys = () => {
  const context = useContext(UploadedKeysContext);
  if (!context) {
    throw new Error(
      "useUploadedKeys must be used inside an UploadedKeysProvider"
    );
  }
  return context;
};
