import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import { motion } from 'framer-motion'
import { fadeInLeft } from '@/apps/animations/boxAnimations'

export interface Feature {
  icon: JSX.Element
  title: string
  description: string
}

interface AdvantagesProps {
  features: Feature[]
}

export const Advantages: React.FC<AdvantagesProps> = ({ features }) => {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
      <Typography variant="h4" sx={{ mb: 6, textAlign: 'center' }}>
        Почему выбирают Aurora?
      </Typography>
      <motion.div {...fadeInLeft}>
        <Grid container spacing={8}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  )
}
