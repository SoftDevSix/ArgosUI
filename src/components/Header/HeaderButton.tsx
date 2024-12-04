import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeaderButtonProps {
  text: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  isSmallScreen: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  icon,
  isSelected = false,
  onClick = () => {},
  isSmallScreen,
}) => {
  const bgColor: string = isSelected ? "#2A2F40" : "transparent";
  const textColor: string = isSelected ? "white" : "white";

  return (
    <Button onClick={onClick} sx={{ padding: 0, minWidth: "40px" }}>
      <Box
        display="flex"
        gap="5px"
        borderRadius="5px"
        padding="10px 20px"
        bgcolor={bgColor}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        {icon}
        {!isSmallScreen && (
          <Typography color={textColor} fontSize="14px">
            {text}
          </Typography>
        )}
      </Box>
    </Button>
  );
};

export default HeaderButton;
