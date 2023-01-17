import { ColumnsType } from 'antd/es/table'
import { IOperation } from '../types'

export const OPERATION_COLS: ColumnsType<IOperation> = [
  {
    title: 'Дата',
    dataIndex: 'month',
  },
  {
    title: 'Имя',
    dataIndex: ['user', 'name'],
  },
  {
    title: 'Категория',
    dataIndex: ['category', 'label'],
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
  },
]
