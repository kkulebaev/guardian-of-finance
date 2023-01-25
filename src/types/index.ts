export enum Categories {
  rent = 1,
  clothes,
  supermarket,
  transport,
  other,
  subscription,
  home,
  gift,
  beauty,
  health,
  entertainment,
  travel,
  expensive,
  help,
}

export type ICategory = {
  id: Categories
  label: string
}

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
