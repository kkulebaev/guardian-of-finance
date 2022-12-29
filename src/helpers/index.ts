import { Categories, ICategory, IUser } from '../types'

export const CATEGORIES: ICategory[] = [
  {
    id: Categories.rent,
    label: 'Аренда квартиры',
  },
  {
    id: Categories.clothes,
    label: 'Одежда и обувь',
  },
  {
    id: Categories.supermarket,
    label: 'Супермаркеты',
  },
  {
    id: Categories.transport,
    label: 'Транспорт',
  },
  {
    id: Categories.other,
    label: 'Остальное',
  },
  {
    id: Categories.subscription,
    label: 'Подписки, мобильная связь, интернет',
  },
  {
    id: Categories.home,
    label: 'Дом, ремонт',
  },
  {
    id: Categories.gift,
    label: 'Подарки',
  },
  {
    id: Categories.beauty,
    label: 'Красота',
  },
  {
    id: Categories.health,
    label: 'Здоровье, аптека',
  },
  {
    id: Categories.entertainment,
    label: 'Развлечения',
  },
  {
    id: Categories.travel,
    label: 'Путешествие',
  },
  {
    id: Categories.expensive,
    label: 'Крупные покупки',
  },
  {
    id: Categories.help,
    label: 'Помощь',
  },
]

export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Константин',
  },
  {
    id: 2,
    name: 'Дарья',
  },
]
