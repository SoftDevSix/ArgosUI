import { Box } from '@mui/material'
import React from 'react'
import FileMenuSideBar from '../components/FilesSideBar/FileMenuSideBar'

const AppTestPage = () => {
  return (
    <Box height={'100vh'} width={'100%'} display={'flex'}>
        <FileMenuSideBar basePath='' projectFiles={['1', '1/2']} setSelectedFilePath={() => {}} />
    </Box>
  )
}

export default AppTestPage