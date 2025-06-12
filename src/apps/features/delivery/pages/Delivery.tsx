import React from 'react'

import { Advantages } from '../../advantages/Advantages'
import { deliveryFeatures } from '@/apps/content/advantagesContent'
import { DeliverHero } from '../components/DeliverHero'
import { Container } from '@mui/material'

export const Delivery: React.FC = () => {
  return (
    <>
      <DeliverHero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Advantages features={deliveryFeatures} />
      </Container>
    </>
  )
}
