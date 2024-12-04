import CodeIcon from "@mui/icons-material/Code";
import { Typography } from "@mui/material";
import React from "react";
import style from "./FileMenuOption.module.css";

interface FileMenuOptionProps {
  fileName: string;
  isSelected: boolean;
  setSelected: (value: string) => void;
}

const FileMenuOption: React.FC<FileMenuOptionProps> = ({
  fileName,
  isSelected,
  setSelected,
}) => {
  return (
    <div
      role="button"
      className={isSelected ? style.activeBg : style.inactiveBg}
      onClick={() => !isSelected && setSelected(fileName)}
    >
      <div className={style.fileMenuOption}>
        <CodeIcon fontSize="small" />
        <Typography fontSize="16px">{fileName}</Typography>
      </div>
    </div>
  );
};

export default FileMenuOption;
