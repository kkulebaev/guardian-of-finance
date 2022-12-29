import { Button, DatePicker, Form, InputNumber, Select } from 'antd'
import './App.css'

interface ICategory {
  id: string
  label: string
}

interface IUser {
  id: number
  name: string
}

function App() {
  const CATEGORIES: ICategory[] = [
    {
      id: 'rent',
      label: 'Аренда квартиры',
    },
    {
      id: 'clothes',
      label: 'Одежда и обувь',
    },
    {
      id: 'supermarket',
      label: 'Супермаркеты',
    },
    {
      id: 'transport',
      label: 'Транспорт',
    },
    {
      id: 'other',
      label: 'Остальное',
    },
    {
      id: 'subscription',
      label: 'Подписки, мобильная связь, интернет',
    },
    {
      id: 'home',
      label: 'Дом, ремонт',
    },
    {
      id: 'gift',
      label: 'Подарки',
    },
    {
      id: 'beauty',
      label: 'Красота',
    },
    {
      id: 'health',
      label: 'Здоровье, аптека',
    },
    {
      id: 'entertainment',
      label: 'Развлечения',
    },
    {
      id: 'travel',
      label: 'Путешествие',
    },
    {
      id: 'expensive',
      label: 'Крупные покупки',
    },
    {
      id: 'help',
      label: 'Помощь',
    },
  ]

  const USERS: IUser[] = [
    {
      id: 1,
      name: 'Константин',
    },
    {
      id: 2,
      name: 'Дарья',
    },
  ]

  return (
    <div className="grid place-items-center">
      <h2>Форма для добавления расходов за месяц</h2>

      <Form className="max-w-5xl" layout="vertical">
        <Form.Item label="Месяц" name="month" colon={false}>
          <DatePicker mode="month" />
        </Form.Item>
        <Form.Item label="Имя" name="username" colon={false}>
          <Select options={USERS.map(x => ({ value: x.id, label: x.name }))} />
        </Form.Item>
        <Form.Item label="Категория" name="category" colon={false}>
          <Select
            options={CATEGORIES.map(x => ({ value: x.id, label: x.label }))}
          />
        </Form.Item>
        <Form.Item label="Сумма" name="sum" colon={false}>
          <InputNumber className="w-full" />
        </Form.Item>
        <Button>Добавить</Button>
      </Form>
    </div>
  )
}

export default App
