import { Box, Typography } from "@mui/material"
import { ReactNode } from "react";

interface HeaderButtonProps {
    text: string,
    icon: ReactNode
}

const HeaderButton : React.FC<HeaderButtonProps> = ({text, icon}) => {
  return (
    <Box display={'flex'} gap={'5px'}>
        {icon}
        <Typography color="white">{text}</Typography>
    </Box>
  )
}

export default HeaderButton