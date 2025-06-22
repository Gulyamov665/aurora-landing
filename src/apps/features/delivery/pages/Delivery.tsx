import React from 'react'
import { Advantages } from '../../advantages/Advantages'
import { benefits, deliveryFeatures } from '@/apps/content/advantagesContent'
import { DeliverHero } from '../components/DeliverHero'
import { Container, Typography } from '@mui/material'
import { DeliveryDescriptionItem } from '../components/DeliveryDescriptionBox'

export const Delivery: React.FC = () => {
  return (
    <>
      <DeliverHero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Advantages features={deliveryFeatures} />
        <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    mb={8}
                    marginTop={15}
                >
                    Возможности сайта для приема заказов
                </Typography>
        {benefits.map((item, index) => (
          <DeliveryDescriptionItem item={item} key={index} reverse={index % 2 === 0} />
               ))}
      </Container>
    </>
  )
}
