import { Box, Container, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import appScreen from '@/assets/delivery-dashbord.png'
import deliveryApp from '@/assets/delivery-app.png'

export const Delivery: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e0e0e0, #f5faff)',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign={'center'}
        >
          Принимайте заказы на доставку еды и навынос
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign={'center'}
        >
          Сайт для доставки еды уже готов. Просто наполните его своими блюдами и
          начните принимать заказы
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {/* Левая часть — текст */}
          <Box
            textAlign={{ xs: 'center', md: 'left' }}
            maxWidth={{ xs: '100%', md: '50%' }}
          >
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="- Принимайте онлайн-заказы без комиссии агрегаторам" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="- Используйте дополнительные возможности: бронь столиков, вызов официанта, скидки на доставку и навынос" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="- Продвигайте свой бизнес онлайн всего за 2490 руб/мес" />
              </ListItem>
            </List>
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

          {/* Правая часть — изображения */}
          <Box display="flex" justifyContent="center" gap={2} flexShrink={0}>
            <Box
              component="img"
              src={deliveryApp}
              alt="App Main Screen"
              sx={{
                width: { xs: 110, md: 150 },
                height: 'auto',
              }}
            />
            <Box
              component="img"
              src={appScreen}
              alt="App Main Screen"
              sx={{
                width: { xs: 240, md: 450 },
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
