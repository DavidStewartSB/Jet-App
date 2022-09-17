import { Category } from './category'

export class Product {
  id?: string
  name?: string
  price?: string
  description?: string
  promo?: number
  image?: string
  images?: []
  category?: Category
  countInStock?: number
  status?: boolean
}