import { Typography } from "@mui/material";
import DirectoryOption from "./FileMenuOption/DirectoryOption";
import styles from "./FileMenuSideBar.module.css";
import { useState } from "react";
import organizeFiles, { FileNode } from "./FileNode";
import FileOption from "./FileMenuOption/FileOption";

interface FileMenuSideBarProps {
  proyectFiles: string[];
  basePath: string;
}

const FileMenuSideBar: React.FC<FileMenuSideBarProps> = ({
  proyectFiles,
  basePath,
}) => {
  const [fileSelected, setFileSelected] = useState<string>(proyectFiles[0]);

  const nodes: FileNode[] = organizeFiles(proyectFiles, basePath);

  return (
    <div className={styles.FileMenuSideBar}>
      <div className={styles.FilesMenuBarTitle}>
        <Typography fontSize={"23px"} fontWeight={"bold"}>
          Project Files
        </Typography>
      </div>
      <div className={styles.FilesMenuOptions}>
        {nodes.map((e) =>
          e.type === "directory" ? (
            <DirectoryOption
              node={e}
              fileSelected={fileSelected}
              setFileSelected={setFileSelected}
            />
          ) : (
            <FileOption
              isSelected={fileSelected === e.name}
              node={e}
              setSelected={() => setFileSelected(e.name)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FileMenuSideBar;
