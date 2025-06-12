import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import {
  Restaurant,
  MobileFriendly,
  TrendingUp,
  Update,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInUp } from '@/apps/animations/boxAnimations'

const features = [
  {
    icon: <MobileFriendly fontSize="large" color="warning" />,
    title: 'Удобно и быстро',
    description: 'Меню на телефоне по QR-коду без загрузки приложений.',
  },
  {
    icon: <Update fontSize="large" color="warning" />,
    title: 'Мгновенные обновления',
    description: 'Меню можно обновить за 1 минуту — без печати.',
  },
  {
    icon: <TrendingUp fontSize="large" color="warning" />,
    title: 'Рост среднего чека',
    description: 'Фотографии и описания блюд повышают продажи.',
  },
  {
    icon: <Restaurant fontSize="large" color="warning" />,
    title: 'Подходит для всех заведений',
    description: 'Кафе, бары, рестораны, кофейни — Aurora адаптируется.',
  },
]

export const Advantages: React.FC = () => {
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
