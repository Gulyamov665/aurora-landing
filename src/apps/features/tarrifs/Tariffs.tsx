import { CheckCircle } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Grid } from '@mui/material'
import { List, ListItem, ListItemIcon } from '@mui/material'
import { ListItemText, Typography } from '@mui/material'
import React from 'react'

const pricing = [
  {
    name: 'Базовый',
    price: '0 ₽',
    features: ['1 меню', 'Без поддержки', 'Ограниченные функции'],
    highlight: false,
  },
  {
    name: 'Стандарт',
    price: '990 ₽ / мес',
    features: ['До 3 меню', 'Поддержка', 'Аналитика', 'QR-дизайнер'],
    highlight: true, // ✨ Пометка как "популярный"
  },
  {
    name: 'Премиум',
    price: '1990 ₽ / мес',
    features: [
      'Без ограничений',
      'Приоритетная поддержка',
      'Интеграции',
      'Статистика заказов',
    ],
    highlight: false,
  },
]

export const Tariffs: React.FC = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 10 }}>
      <Typography
        variant="h4"
        sx={{ mb: 6, textAlign: 'center', fontWeight: 700 }}
      >
        Тарифы
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {pricing.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                position: 'relative',
                height: '100%',
                p: 1,
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: plan.highlight ? '2px solid' : '1px solid',
                borderColor: plan.highlight ? 'warning.main' : 'grey.200',
                boxShadow: plan.highlight
                  ? '0 12px 30px rgba(0, 0, 0, 0.08)'
                  : '0 8px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {plan.highlight && (
                <Chip
                  label="Популярный"
                  color="warning"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontWeight: 500,
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {plan.name}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: 'inherit.main', mb: 2 }}
                >
                  {plan.price}
                </Typography>
                <List dense>
                  {plan.features.map((feat, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText primary={feat} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
