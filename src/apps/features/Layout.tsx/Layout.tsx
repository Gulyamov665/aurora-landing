import React from 'react'
import { Box } from '@mui/material'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
