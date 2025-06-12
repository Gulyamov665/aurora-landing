import React from 'react'

import { Advantages } from '../../advantages/Advantages'
import { benefits, deliveryFeatures } from '@/apps/content/advantagesContent'
import { DeliverHero } from '../components/DeliverHero'
import { Container } from '@mui/material'
import { DeliveryDescriptionItem } from '../components/DeliveryDescriptionBox'

export const Delivery: React.FC = () => {
  return (
    <>
      <DeliverHero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Advantages features={deliveryFeatures} />
        {benefits.map((item, index) => (
          <DeliveryDescriptionItem item={item} key={index} reverse={index % 2 === 0} />
               ))}
      </Container>
    </>
  )
}
