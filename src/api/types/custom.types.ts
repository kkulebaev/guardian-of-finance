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
  userId: number
  month: string
  categoryId: number
  amount: number
}

export interface IOperationDB {
  id: string

  users: IUser | IUser[] | null
  month: string
  categories: ICategory | ICategory[] | null
  amount: number
}

export interface Credentials {
  email: string
  password: string
}
