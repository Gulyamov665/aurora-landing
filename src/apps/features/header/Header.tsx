import { Box, Container } from '@mui/material'
import { HeaderNavigation } from './components/HeaderDropdown'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 1 }}>
      <Container maxWidth="lg">
        <HeaderNavigation />
      </Container>
    </Box>
  )
}
