import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { Grid, Link, IconButton } from '@mui/material'
import { Instagram, Telegram, Email } from '@mui/icons-material'

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f8f8f8', py: 6, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Aurora — электронное меню
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Упрощаем обслуживание, повышаем продажи <br /> и улучшаем
              впечатление гостей.
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Ссылки
            </Typography>
            <Link
              href="#features"
              underline="hover"
              color="inherit"
              display="block"
            >
              Преимущества
            </Link>
            <Link
              href="#pricing"
              underline="hover"
              color="inherit"
              display="block"
            >
              Тарифы
            </Link>
            <Link
              href="#demo"
              underline="hover"
              color="inherit"
              display="block"
            >
              Демо-доступ
            </Link>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Контакты
            </Typography>
            <Typography variant="body2">info@aurora.menu</Typography>
            <Box mt={1}>
              <IconButton href="https://t.me/aurora_support" target="_blank">
                <Telegram />
              </IconButton>
              <IconButton
                href="https://instagram.com/aurora.menu"
                target="_blank"
              >
                <Instagram />
              </IconButton>
              <IconButton href="mailto:info@aurora.menu">
                <Email />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Aurora. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
