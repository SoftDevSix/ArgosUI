import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { FileNode } from "../FileNode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileOption from "./FileOption";
import FolderIcon from "@mui/icons-material/Folder";
import { COLORS } from "../../../utils/styleConstants";

interface DirectoryOptionProps {
  node: FileNode;
  fileSelected: string;
  setFileSelected: (data: string, path: string) => void;
  root?: boolean;
}

const DirectoryOption: React.FC<DirectoryOptionProps> = ({
  node,
  fileSelected,
  setFileSelected,
  root = true,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box>
      <Accordion
        disableGutters
        sx={{
          backgroundColor: COLORS.PRIMARY_DEFAULT,
          color: COLORS.NEUTRAL_WHITE,
          paddingLeft: root ? 0 : 1.6,
          "&:before": { display: "none" },
        }}
        expanded={expanded}
        onChange={() => setExpanded((prev) => !prev)}
      >
        <AccordionSummary
          sx={{
            backgroundColor: COLORS.PRIMARY_DEFAULT,
            color: COLORS.NEUTRAL_WHITE,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: COLORS.NEUTRAL_WHITE }} />}
          aria-controls={node.name + "-content"}
          id={node.name + "-header"}
        >
          <FolderIcon
            sx={{
              marginRight: "10px",
              color: expanded ? "#75DE9B" : "gray",
            }}
          />
          {node.name}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: COLORS.PRIMARY_DEFAULT,
            color: COLORS.NEUTRAL_WHITE,
          }}
        >
          {node.children?.map((e) =>
            e.type === "directory" ? (
              <DirectoryOption
                key={e.name}
                node={e}
                fileSelected={fileSelected}
                setFileSelected={setFileSelected}
                root={false}
              />
            ) : (
              <FileOption
                key={e.name}
                isSelected={fileSelected === e.name}
                node={e}
                setSelected={() => setFileSelected(e.name, e.filePath)}
              />
            )
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DirectoryOption;
