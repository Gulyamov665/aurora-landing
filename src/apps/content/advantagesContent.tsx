import { Restaurant, Update } from '@mui/icons-material'
import { MobileFriendly, TrendingUp } from '@mui/icons-material'
import { LocalShipping, Security, MoneyOff } from '@mui/icons-material'
import { PeopleAlt, AllInclusive, ThumbUp } from '@mui/icons-material'
import menuImage from '@/assets/delivery-app.png' 


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


export const benefits = [
  {
    img: menuImage,
    title: "Навынос или доставка",
    description: "Вы можете оставить только один вариант или предоставить клиенту выбор. Если вы не знаете, как организовать доставку еды на дом, мы подскажем, что нужно делать."
  },
  {
    img: menuImage,
    title: "Выбор зоны доставки",
    items: [
      "Организуйте собственную доставку на ваш выбор – по всему городу или только по своему району",
      "Укажите уникальные условия для каждой зоны доставки"
    ]
  },
  {
    img: menuImage,
    title: "Интерактивное меню с фотографиями",
    items: [
      "Фотографии вызывают интерес",
      "Привычный интерфейс заказа еды"
    ]
  },
  {
    img: menuImage,
    title: "Повышение среднего чека",
    items: [
      "Платные модификаторы увеличивают стоимость блюда",
      "Список рекомендуемых блюд увеличивает общую стоимость заказа"
    ]
  },
  {
    img: menuImage,
    title: "Уведомления в Telegram",
    items: [
      "Все заявки приходят в вашу группу в Telegram",
      "Сразу видно постоянных клиентов и можно предоставить им бонусы",
      "Исключается человеческий фактор при приёме заказов"
    ]
  },
  {
    img: menuImage,
    title: "Дополнительные возможности",
    items: [
      "Бронирование столиков онлайн",
      "Вызов официанта в заведении",
      "Возможность оставить отзыв руководству",
      "Возможность установить рекламный баннер",
      "Предоставление скидок на доставку и навынос",
      "Модификаторы для компоновки блюда"
    ]
  }
];