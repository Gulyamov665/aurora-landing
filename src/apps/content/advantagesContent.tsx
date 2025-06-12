import { Restaurant, Update } from '@mui/icons-material'
import { MobileFriendly, TrendingUp } from '@mui/icons-material'
import { LocalShipping, Security, MoneyOff } from '@mui/icons-material'
import { PeopleAlt, AllInclusive, ThumbUp } from '@mui/icons-material'

export const mainFeatures = [
  {
    icon: <MobileFriendly fontSize="large" color="warning" />,
    title: 'Удобно и быстро',
    description: 'Меню на телефоне по QR-коду без загрузки приложений.',
  },
  {
    icon: <Update fontSize="large" color="warning" />,
    title: 'Мгновенные обновления',
    description: 'Меню можно обновить за 1 минуту — без печати.',
  },
  {
    icon: <TrendingUp fontSize="large" color="warning" />,
    title: 'Рост среднего чека',
    description: 'Фотографии и описания блюд повышают продажи.',
  },
  {
    icon: <Restaurant fontSize="large" color="warning" />,
    title: 'Подходит для всех заведений',
    description: 'Кафе, бары, рестораны, кофейни — Aurora адаптируется.',
  },
]

export const deliveryFeatures = [
  {
    icon: <LocalShipping fontSize="large" color="warning" />,
    title: 'Тренд на доставку',
    description:
      'Рынок доставки еды вырос на 35% за 5 лет. Уже невозможно конкурировать без собственной доставки.',
  },
  {
    icon: <Security fontSize="large" color="warning" />,
    title: 'Защита от локдаунов',
    description:
      'Собственная доставка помогает бизнесу не зависеть от внешних обстоятельств и агрегаторов.',
  },
  {
    icon: <MoneyOff fontSize="large" color="warning" />,
    title: 'Без комиссии агрегаторам',
    description:
      'Экономьте до 35% с каждого заказа, принимая заказы напрямую без посредников.',
  },
  {
    icon: <PeopleAlt fontSize="large" color="warning" />,
    title: 'Клиентская база в ваших руках',
    description:
      'Создайте свою базу клиентов и управляйте взаимоотношениями напрямую, а не через агрегаторы.',
  },
  {
    icon: <AllInclusive fontSize="large" color="warning" />,
    title: 'Все типы заказов',
    description:
      'Доставка, навынос, заказы в заведении через QR — всё в одном решении.',
  },
  {
    icon: <ThumbUp fontSize="large" color="warning" />,
    title: 'Качество сервиса',
    description:
      'Онлайн-оплата, бронирование, вызов официанта, отзывы — всё, что ждёт гость от современного сервиса.',
  },
]
