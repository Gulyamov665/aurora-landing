import type React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { Hero } from './hero/Hero'
import { Advantages } from './advantages/Advantages'
import { Tariffs } from './tarrifs/Tariffs'
import { PartnersSlider } from './slider/PartnersSlider'
import { mainFeatures } from '../content/advantagesContent'

export const MainContent: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Hero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Преимущества */}
        <Advantages features={mainFeatures} />
        {/* Тарифы */}

        <Tariffs />
        {/* Отзывы */}

        <PartnersSlider />
        {/* CTA */}
        <Box textAlign={'center'}>
          <Typography variant="h5" sx={{ mt: 10 }}>
            Готовы перейти на электронное меню?
          </Typography>
          <Button
            variant="outlined"
            size="large"
            color="warning"
            sx={{
              mt: 2,
              borderRadius: 20,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            }}
          >
            Запросить доступ
          </Button>
        </Box>
      </Container>
    </>
  )
}
