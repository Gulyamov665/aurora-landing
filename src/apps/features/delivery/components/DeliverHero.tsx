import React from 'react'
import appScreen from '@/assets/delivery-dashbord.png'
import deliveryApp from '@/assets/delivery-app.png'
import { motion } from 'framer-motion'
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from '@/apps/animations/boxAnimations'
import { Box, ListItem, ListItemText } from '@mui/material'
import { Container, Typography, Button, List } from '@mui/material'

export const DeliverHero: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e0e0e0, #f5faff)',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div {...fadeInUp}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ color: '#222' }}
          >
            Принимайте заказы на доставку еды и навынос
          </Typography>
          <Typography
            variant="h5"
            fontWeight="medium"
            gutterBottom
            textAlign="center"
            sx={{ color: '#555' }}
          >
            Сайт для доставки еды уже готов. Просто наполните его своими блюдами
            и начните принимать заказы
          </Typography>
        </motion.div>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={6}
          mt={6}
        >
          <motion.div {...fadeInLeft}>
            {/* Левая часть — текст */}
            <Box
              textAlign={{ xs: 'center', md: 'left' }}
              maxWidth={{ xs: '100%', md: '100%' }}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 4,
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(6px)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <List dense>
                <ListItem disableGutters>
                  <ListItemText
                    primary="- Принимайте онлайн-заказы без комиссии агрегаторам"
                    primaryTypographyProps={{ sx: { color: '#333' } }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="- Доп. возможности: бронь столиков, скидки, вызов официанта"
                    primaryTypographyProps={{ sx: { color: '#333' } }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="- Продвигайте бизнес онлайн всего за 2490 руб/мес"
                    primaryTypographyProps={{ sx: { color: '#333' } }}
                  />
                </ListItem>
              </List>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Современное решение для вашего заведения
              </Typography>

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
                Связаться с нами
              </Button>
            </Box>
          </motion.div>

          {/* Правая часть — изображения */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            flexShrink={0}
            sx={{
              p: 2,
              borderRadius: 4,
            }}
          >
            <motion.div {...fadeInRight}>
              <Box
                component="img"
                src={deliveryApp}
                alt="Mobile App"
                sx={{
                  width: { xs: 100, md: 140 },
                  height: 'auto',
                }}
              />
              <Box
                component="img"
                src={appScreen}
                alt="Dashboard"
                sx={{
                  width: { xs: 220, md: 400 },
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
