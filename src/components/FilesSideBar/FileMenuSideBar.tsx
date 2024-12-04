import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Drawer,
  Fab,
  useMediaQuery,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DirectoryOption from "./FileMenuOption/DirectoryOption";
import FileOption from "./FileMenuOption/FileOption";
import styles from "./FileMenuSideBar.module.css";
import organizeFiles, { FileNode } from "./FileNode";
import { splitUntilSecondSlash } from "../../utils/methods";

const DRAWER_WIDTH = 300;

interface FileMenuSideBarProps {
  projectFiles: string[];
  basePath: string;
  setSelectedFilePath: (e: string) => void;
}

const FileMenuSideBar: React.FC<FileMenuSideBarProps> = ({
  projectFiles,
  basePath,
  setSelectedFilePath,
}) => {
  const [fileSelected, setFileSelected] = useState<string>(projectFiles[0]);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Cambia el breakpoint a "sm" para incluir tablets
  const isLargeScreen = useMediaQuery(
    (theme: Theme) => theme.breakpoints.up("lg") // Usamos `lg` para que tablets entren en el flujo móvil
  );

  const nodes: FileNode[] = organizeFiles(projectFiles.slice(1), basePath);

  function onFileSelected(value: string, path: string): void {
    setFileSelected(value);
    setSelectedFilePath(splitUntilSecondSlash(path));
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const DrawerContent = (
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
              key={e.name}
              node={e}
              fileSelected={fileSelected}
              setFileSelected={onFileSelected}
            />
          ) : (
            <FileOption
              key={e.name}
              isSelected={fileSelected === e.name}
              node={e}
              setSelected={() => onFileSelected(e.name, e.filePath)}
            />
          )
        )}
      </div>
    </div>
  );

  return (
    <>
      <CssBaseline />
      {!isLargeScreen && (
        <Fab
          color="primary"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1300,
          }}
        >
          <MenuIcon />
        </Fab>
      )}
      <Drawer
        variant={isLargeScreen ? "permanent" : "temporary"}
        open={isLargeScreen || mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            position: isLargeScreen ? "relative" : "fixed",
            backgroundColor: "#1D212F",
            borderRight: "1px solid white",
          },
        }}
      >
        {DrawerContent}
      </Drawer>
    </>
  );
};

export default FileMenuSideBar;
