import React from 'react'
import { Box, Typography, Container, Grid, List, ListItem, ListItemText } from '@mui/material'
// Замени путь на актуальный для себя

interface Feature {
    title: string;
    description?: string;
    items?: string[];
    img: string
}

interface DeliveryDescriptionItemProps {
    item: Feature;
    reverse?: boolean;

}

export const DeliveryDescriptionItem: React.FC<DeliveryDescriptionItemProps> = ({ item, reverse }) => {
    return (
        <Box sx={{ py: { xs: 6, md: 12 } }}>
            <Container maxWidth="lg">
                

                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    direction={reverse ? 'row-reverse' : 'row'}
                >
                    {/* Картинка телефона */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={item.img}
                            alt="Меню на телефоне"
                            sx={{ width: '50%', maxWidth: 400, mx: 'auto', display: 'block' }}
                        />
                    </Grid>

                    {/* Текст справа */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" fontWeight="medium" gutterBottom>
                            {item.title}
                        </Typography>
                        <List >
                            {item.items?.map((text, index) => (
                                <ListItem disableGutters key={index}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}

                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
