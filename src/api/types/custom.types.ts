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

export interface IOperationDB extends IOperation {
  id: string
}
