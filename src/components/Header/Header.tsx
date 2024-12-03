import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HeaderButton from "./HeaderButton";
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Header: React.FC = () => {
  return (
    <Box width={'100%'} bgcolor={'#12141D'} height={'75px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'30px'} gap={'70px'}>
      <Box display={'flex'} gap={'70px'}>
        <Typography color="#ffffff" fontSize={'45px'} fontWeight={'bold'}>Argos</Typography>
        <Box display={'flex'} gap={'40px'} alignItems={'center'}>
          <HeaderButton text="Project coverage" icon={<PieChartOutlineIcon />}/>
          <HeaderButton text="File coverage" icon={<FindInPageIcon />}/>
        </Box>
      </Box>
      <HeaderButton text="Analyze New Project" icon={<ExitToAppIcon />}/>
    </Box>
  );
};

export default Header;
