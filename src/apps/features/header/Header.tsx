import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant='button'>
            Aurora Team
        </Typography>
      </Container>
    </Box>
  )
}
