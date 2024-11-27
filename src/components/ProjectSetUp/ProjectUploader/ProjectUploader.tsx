import React, { useEffect, useRef, useState } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../../Form/CustomButton";

interface ProjectUploaderProps {
  setProjectFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}

const ProjectUploader: React.FC<ProjectUploaderProps> = ({
  setProjectFiles,
}) => {
  const [folderPath, setFolderPath] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute("webkitdirectory", "");
    }
  }, []);

  const handleFolderSelection = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    try {
      if (files) {
        setProjectFiles(files);
        const folderName = files[0]?.webkitRelativePath.split("/")[0];
        setFolderPath(folderName);
      }
    } catch (e) {
      alert("Could not read the project, please try again. " + e);
    }
  };

  const handleDeleteProject = () => {
    setFolderPath(null);
    setProjectFiles(null);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={"flex-end"}
      gap={2}
      mt={4}
    >
      <Typography variant="body1" flex={1} ml={1}>
        {folderPath ? `/${folderPath}` : "No folder selected"}
      </Typography>

      <CustomButton component="label" color="info" disabled={!!folderPath}>
        Upload the project
        <input
          ref={fileInputRef}
          type="file"
          hidden
          onChange={handleFolderSelection}
        />
      </CustomButton>

      {folderPath && (
        <IconButton
          style={{ backgroundColor: "#f00" }}
          color="error"
          onClick={handleDeleteProject}
          aria-label="delete"
        >
          <DeleteIcon style={{ fontSize: 24, color: "#fff" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default ProjectUploader;
