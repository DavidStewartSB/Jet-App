import { Category } from './category'

export class Product {
  _id?: string
  id?: string
  name?: string
  price?: string
  description?: string
  promo?: number
  image?: string
  images?: []
  category?: any =  Category
  countInStock?: number
  status?: boolean
}