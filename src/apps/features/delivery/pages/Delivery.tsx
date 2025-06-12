import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Delivery: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box minHeight={'100dvh'}>
        <Typography>Delivery</Typography>
      </Box>
    </Container>
  )
}
