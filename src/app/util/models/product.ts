import { Category } from './category'

export class Product {
  id?: string
  name?: string
  description?: string
  image?: string
  images?: string[]
  price?: number
  prome?: number
  category?: Category
  countInStock?: number
}