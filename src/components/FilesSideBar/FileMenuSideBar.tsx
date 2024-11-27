import { Typography } from "@mui/material";
import FileMenuOption from "./FileMenuOption/FileMenuOption";
import styles from "./FileMenuSideBar.module.css";
import { useState } from "react";

interface FileMenuSideBarProps {
  proyectFiles: string[];
}

const FileMenuSideBar: React.FC<FileMenuSideBarProps> = ({ proyectFiles }) => {
  const [fileSelected, setFileSelected] = useState<string>(proyectFiles[0]);

  return (
    <div className={styles.FileMenuSideBar}>
      <div className={styles.FilesMenuBarTitle}>
        <Typography fontSize={"23px"} fontWeight={"bold"}>
          Project Files
        </Typography>
      </div>
      <div className={styles.FilesMenuOptions}>
        {proyectFiles.map((e) => (
          <FileMenuOption
            fileName={e}
            isSelected={fileSelected === e}
            setSelected={setFileSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default FileMenuSideBar;
