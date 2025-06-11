import React from 'react'
import { FormatQuote } from '@mui/icons-material'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

const testimonials = [
  {
    name: "Бар 'У Палыча'",
    feedback:
      'После перехода на Aurora продажи выросли на 15%! Гости довольны, а нам удобно.',
  },
  {
    name: "Кофейня 'Beans & Co'",
    feedback:
      'Очень удобно: быстрое обновление меню и красивая подача. Отличный сервис.',
  },
  {
    name: "Ресторан 'La Piazza'",
    feedback:
      'Теперь не тратим деньги на печать меню и видим статистику по заказам. Супер!',
  },
]

export const Reviews: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 10, mb: 4 }}>
        Что говорят наши клиенты
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <FormatQuote fontSize="large" color="primary" />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {item.feedback}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  — {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
