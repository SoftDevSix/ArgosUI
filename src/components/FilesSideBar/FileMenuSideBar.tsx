import { Typography } from "@mui/material";
import DirectoryOption from "./FileMenuOption/DirectoryOption";
import styles from "./FileMenuSideBar.module.css";
import { useState } from "react";
import organizeFiles, { FileNode } from "./FileNode";
import FileOption from "./FileMenuOption/FileOption";

interface FileMenuSideBarProps {
  projectFiles: string[];
  basePath: string;
  setSelectedFilePath: (e:string) => void
}

const FileMenuSideBar: React.FC<FileMenuSideBarProps> = ({
  projectFiles: projectFiles,
  basePath,
  setSelectedFilePath
}) => {
  const [fileSelected, setFileSelected] = useState<string>(projectFiles[0]);

  const nodes: FileNode[] = organizeFiles(projectFiles, basePath);

  function onFileSelected(value : string, path : string) : void {
    setFileSelected(value);
    setSelectedFilePath(path);
  }

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
              setFileSelected={onFileSelected}
            />
          ) : (
            <FileOption
              isSelected={fileSelected === e.name}
              node={e}
              setSelected={() => onFileSelected(e.name, e.filePath)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FileMenuSideBar;
