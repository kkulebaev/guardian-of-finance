export enum Categories {
  'rent' = 'rent',
  'clothes' = 'clothes',
  'supermarket' = 'supermarket',
  'transport' = 'transport',
  'other' = 'other',
  'subscription' = 'subscription',
  'home' = 'home',
  'gift' = 'gift',
  'beauty' = 'beauty',
  'health' = 'health',
  'entertainment' = 'entertainment',
  'travel' = 'travel',
  'expensive' = 'expensive',
  'help' = 'help',
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
