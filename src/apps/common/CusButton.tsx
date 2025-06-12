import { Button } from '@mui/material'
import React from 'react'

type CusButtonProps = {
  title: string
}

export const OrangeButton: React.FC<CusButtonProps> = ({ title }) => {
  return (
    <Button
      variant="contained"
      color="warning"
      size="large"
      sx={{
        mt: 3,
        borderRadius: 4,
        px: 4,
        boxShadow: '0 8px 20px rgba(255, 193, 7, 0.3)',
        textTransform: 'none',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#ffb300',
          boxShadow: '0 12px 24px rgba(255, 193, 7, 0.4)',
        },
      }}
    >
      {title}
    </Button>
  )
}
