import type React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { Hero } from './hero/Hero'
import { Advantages } from './advantages/Advantages'
import { Tariffs } from './tarrifs/Tariffs'
import { PartnersSlider } from './slider/PartnersSlider'
import { mainFeatures } from '../content/advantagesContent'
import { OrangeButton } from '../common/CusButton'

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
          <OrangeButton title="Связаться с нами" />
        </Box>
      </Container>
    </>
  )
}
