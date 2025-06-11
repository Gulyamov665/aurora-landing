import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const partners = [
  '/logos/logo1.png',
  '/logos/logo2.jpg',
  '/logos/logo3.jpg',
  '/logos/logo4.png',
  '/logos/logo5.jpg',
  '/logos/logo6.jpg',
]

export const PartnersSlider: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', fontWeight: 600, mb: 8 }}
      >
        С нами сотрудничают
      </Typography>
      <Swiper
        modules={[Autoplay]}
        loop
        speed={2000}
        slidesPerView={2}
        spaceBetween={24}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor
        freeMode
        breakpoints={{
          600: { slidesPerView: 3 },
          960: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        style={{ padding: '0 16px' }}
      >
        {partners.map((logo, i) => (
          <SwiperSlide key={i}>
            <Box
              component="img"
              src={logo}
              alt={`Партнёр ${i + 1}`}
              sx={{
                maxHeight: 100,
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
