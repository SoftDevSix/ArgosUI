import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

interface CenteredContainerProps {
    children: ReactNode
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        {children}
    </Box>
  )
}

export default CenteredContainer