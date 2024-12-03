import React, { useState } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../../Form/CustomButton";

interface ProjectUploaderProps {
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}

const ProjectUploader: React.FC<ProjectUploaderProps> = ({ setFormData }) => {
  const [folderPath, setFolderPath] = useState<string | null>(null);

  const handleFolderSelection = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    try {
      if (files && files.length > 0) {
        const zipFile = files[0];
        if (zipFile.type !== "application/zip") {
          alert("Please upload a valid ZIP file.");
          return;
        }

        const formData = new FormData();
        formData.append("file", zipFile);
        setFormData(formData);

        const zipFileName = zipFile.name;
        setFolderPath(zipFileName);
      }
    } catch (e) {
      alert("Could not read the ZIP file, please try again. " + e);
    }
  };

  const handleDeleteProject = () => {
    setFolderPath(null);
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={"flex-end"}
        gap={2}
        mt={4}
      >
        <Typography variant="body1" flex={1} ml={1}>
          {folderPath ? `/${folderPath}` : "No zip file selected"}
        </Typography>

        <CustomButton component="label" color="info" disabled={!!folderPath}>
          Upload the project
          <br />
          <input
            type="file"
            hidden
            accept=".zip"
            onChange={handleFolderSelection}
          />
        </CustomButton>

        {folderPath && (
          <IconButton
            style={{ backgroundColor: "#f00" }}
            color="error"
            onClick={handleDeleteProject}
            aria-label="delete-uploaded-project"
          >
            <DeleteIcon style={{ fontSize: 24, color: "#fff" }} />
          </IconButton>
        )}
      </Box>
      <Typography textAlign={"right"} variant="caption" mt={1}>
        Select the zip that contains your entire project
      </Typography>
    </Box>
  );
};

export default ProjectUploader;
