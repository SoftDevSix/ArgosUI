import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { COLORS } from "../../../utils/styleConstants.ts";

interface CoverageFilesListProps {
    title: string;
    files: string[];
}

const CoverageFilesList: React.FC<CoverageFilesListProps> = ({ title, files }) => (
    <>
        <Typography sx={{ color: COLORS.LINK, mt: 2, mb: 1 }}>
            {title}:
        </Typography>
        <List dense>
            {files.length > 0 ? (
                files.map((file) => (
                    <ListItem key={file} sx={{ py: 0 }}>
                        <ListItemText
                            primary={file}
                            primaryTypographyProps={{
                                sx: { color: COLORS.NEUTRAL_WHITE },
                            }}
                        />
                    </ListItem>
                ))
            ) : (
                <ListItem sx={{ py: 0 }}>
                    <ListItemText
                        primary="None"
                        primaryTypographyProps={{
                            sx: { color: COLORS.NEUTRAL_WHITE },
                        }}
                    />
                </ListItem>
            )}
        </List>
    </>
);

export default CoverageFilesList;
