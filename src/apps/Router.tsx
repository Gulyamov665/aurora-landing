import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Delivery } from './features/delivery/pages/Delivery'
import { Layout } from './features/Layout.tsx/Layout'
import { MainContent } from './features/MainContent'

export const Router: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </Layout>
  )
}
