import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { COLORS } from "../../utils/styleConstants";

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
          <Typography color={COLORS.NEUTRAL_WHITE} fontSize="14px">
            {text}
          </Typography>
        )}
      </Box>
    </Button>
  );
};

export default HeaderButton;
