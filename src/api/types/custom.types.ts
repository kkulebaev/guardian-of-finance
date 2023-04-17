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
  id: string
  user: IUser
  month: string
  category: ICategory
  sum: number
}
