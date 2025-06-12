import { Box, Container, Typography } from '@mui/material'
import { Button } from '@mui/material';
import { List, ListItem, ListItemText, } from '@mui/material';
import React from 'react'
import appScreen from '@/assets/apple-iphone-15-black-mockup/main-screen.png'
import appScreenSecond from '@/assets/apple-iphone-15-black-mockup/main-screen-secondary.png'

export const Delivery: React.FC = () => {
  return (
    // <Box minHeight={'100dvh'} p={0}>
    //   <Box sx={{ bgcolor: '#f5f5f5', py:0 }}>
    //     <Container maxWidth="lg" sx={{ py: 8 }}>

    //       <Grid container spacing={4} alignItems="center">
    //         <Grid item xs={12} md={6}>
    //           <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
    //             Готовый сайт для приема заказов на доставку еды и навынос
    //           </Typography>
    //           <Typography variant="h6" color="textSecondary" paragraph>
    //             Сайт для доставки еды уже готов. Просто наполните его своими блюдами и начните принимать заказы
    //           </Typography>

    //           <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
    //             Принимайте заказы на доставку еды и навынос
    //           </Typography>
    //           <List dense>
    //             <ListItem disableGutters>
    //               <ListItemText primary="Принимайте онлайн-заказы без комиссии агрегаторам" />
    //             </ListItem>
    //             <ListItem disableGutters>
    //               <ListItemText primary="Используйте дополнительные возможности: бронь столиков, вызов официанта, скидки на доставку и навынос" />
    //             </ListItem>
    //             <ListItem disableGutters>
    //               <ListItemText primary="Продвигайте свой бизнес онлайн всего за 2490 руб/мес" />
    //             </ListItem>
    //           </List>

    //           <Typography variant="body1" color="textSecondary" mt={2}>
    //             Foodeon поможет открыть доставку еды без стартовых вложений за 1 день. Просто попробуйте.
    //           </Typography>

    //           <Box mt={3}>
    //             <Button variant="contained" color="primary" size="large">
    //               Начать бесплатно
    //             </Button>
    //           </Box>
    //         </Grid>

    //         <Grid item xs={12} md={6}>
    //           <Box
    //             sx={{
    //               display: 'flex',
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               flexWrap: 'wrap',
    //               gap: 2,
    //             }}
    //           >
    //             <img
    //               src="/images/mobile.png"
    //               alt="Мобильная версия"
    //               style={{ maxWidth: '200px', borderRadius: 8 }}
    //             />
    //             <img
    //               src="/images/desktop.png"
    //               alt="Десктопная версия"
    //               style={{ maxWidth: '300px', borderRadius: 8 }}
    //             />
    //           </Box>
    //         </Grid>
    //       </Grid>

    //     </Container>
    //   </Box>
    // </Box>
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e0e0e0, #f5faff)',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign={'center'}>
          Принимайте заказы на доставку еды и навынос
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign={'center'}>
          Сайт для доставки еды уже готов. Просто наполните его своими блюдами и начните принимать заказы
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
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
