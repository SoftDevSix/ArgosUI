import React, { useEffect, useRef, useState } from "react";
import { Button, IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProjectUploader = () => {
  const [folderPath, setFolderPath] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute("webkitdirectory", "");
    }
  }, []);

  const handleFolderUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const folderName = files[0]?.webkitRelativePath.split("/")[0];
      setFolderPath(folderName);
    }
  };

  const handleDeleteProject = () => {
    setFolderPath(null);
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

      <Button variant="contained" color="info" component="label">
        Upload the project
        <input
          ref={fileInputRef}
          type="file"
          hidden
          onChange={handleFolderUpload}
        />
      </Button>

      {folderPath && (
        <IconButton
          style={{ backgroundColor: "#f00" }}
          color="error"
          onClick={handleDeleteProject}
        >
          <DeleteIcon style={{ fontSize: 24, color: "#fff" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default ProjectUploader;
