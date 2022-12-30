import { ColumnsType } from 'antd/es/table'
import { IOperation } from '../types'

// eslint-disable-next-line import/prefer-default-export
export const OPERATION_COLS: ColumnsType<IOperation> = [
  {
    title: 'Дата',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'Имя',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Категория',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
    key: 'sum',
  },
]
