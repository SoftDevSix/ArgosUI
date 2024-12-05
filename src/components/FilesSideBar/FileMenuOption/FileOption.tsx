import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FileNode } from "../FileNode";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

interface FileOptionProps {
  node: FileNode;
  setSelected: () => void;
  isSelected: boolean;
}

const FileOption: React.FC<FileOptionProps> = ({
  node,
  setSelected,
  isSelected,
}) => {
  return (
    <Box
      bgcolor={isSelected ? "#12141D" : "#2A2F40"}
      padding={"5px"}
      display="flex"
      alignItems="center"
    >
      <Button
        onClick={() => setSelected()}
        fullWidth
        sx={{
          justifyContent: "flex-start",
          color: isSelected ? "white" : "gray",
          textTransform: "none",
        }}
      >
        <InsertDriveFileIcon sx={{ marginRight: "10px" }} />
        <Typography
          width={"99%"}
          textAlign={"left"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
        >
          {node.name}
        </Typography>
      </Button>
    </Box>
  );
};

export default FileOption;
