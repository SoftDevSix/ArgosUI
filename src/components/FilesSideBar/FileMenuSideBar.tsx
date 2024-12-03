import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Drawer,
  IconButton,
  useMediaQuery,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DirectoryOption from "./FileMenuOption/DirectoryOption";
import FileOption from "./FileMenuOption/FileOption";
import styles from "./FileMenuSideBar.module.css";
import organizeFiles, { FileNode } from "./FileNode";

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
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  const nodes: FileNode[] = organizeFiles(projectFiles.slice(1), basePath);

  function onFileSelected(value: string, path: string): void {
    setFileSelected(value);
    setSelectedFilePath(path);
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
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            ml: 1,
            mt: 2,
            position: "fixed",
            zIndex: 1201,
          }}
        >
          <MenuIcon />
        </IconButton>
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
            backgroundColor: "transparent",
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
