import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import appScreen from '@/assets/apple-iphone-15-black-mockup/main-screen.png'
import appScreenSecond from '@/assets/apple-iphone-15-black-mockup/main-screen-secondary.png'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '@/apps/animations/boxAnimations'

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e0e0e0, #f5faff)',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {/* Левая часть — текст */}
          <motion.div {...fadeInLeft}>
            <Box
              textAlign={{ xs: 'center', md: 'left' }}
              maxWidth={{ xs: '100%', md: '100%' }}
            >
              <Typography
                variant="h3"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                Aurora
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
              >
                Современное решение для вашего заведения
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                size="large"
                sx={{
                  mt: 3,
                  borderRadius: 20,
                  borderWidth: 2,
                  px: 4,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Связаться с нами
              </Button>
            </Box>
          </motion.div>

          {/* Правая часть — изображения */}
          <Box display="flex" justifyContent="center" gap={2} flexShrink={0}>
            <motion.div {...fadeInRight}>
              <Box
                component="img"
                src={appScreenSecond}
                alt="App Secondary Screen"
                sx={{
                  width: { xs: 140, md: 250 },
                  height: 'auto',
                }}
              />
              <Box
                component="img"
                src={appScreen}
                alt="App Main Screen"
                sx={{
                  width: { xs: 140, md: 250 },
                  height: 'auto',
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
