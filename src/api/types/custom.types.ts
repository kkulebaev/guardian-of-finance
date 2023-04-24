import { CATEGORIES, FAMILY } from '../constants'

export interface ICategory {
  id: number
  label: string
}

export type ICategories = ICategory[]

export interface IUser {
  id: number
  name: string
}

export interface IOperation {
  user_id: number
  month: string
  category_id: number
  amount: number
}

export interface IOperationDB {
  id: string

  [FAMILY]: IUser | IUser[] | null
  month: string
  [CATEGORIES]: ICategory | ICategory[] | null
  amount: number
}

export interface Credentials {
  email: string
  password: string
}
