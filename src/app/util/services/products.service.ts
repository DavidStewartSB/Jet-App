import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURLProducts = 'http://localhost:3000/api/v1/products'

    constructor(private http: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.apiURLProducts)
    }
    getProduct(productId: String): Observable<Product>{
        return this.http.get<Product>(`${this.apiURLProducts}/${productId}`)
    }
    getProductCount(): Observable<number> {
        return this.http.get<number>(`${this.apiURLProducts}/get/count`)
    }
    createProduct(productFormData: FormData): Observable<Product>{
        return this.http.post<Product>(`${this.apiURLProducts}`, productFormData)
    }
    updateProduct(productFormData: FormData, productId: string): Observable<Product>{
        return this.http.put<Product>(`${this.apiURLProducts}/${productId}`, productFormData)
    }
    deleteProduct(product: Product): Observable<Product> {
        return this.http.delete<Product>(`${this.apiURLProducts}/${product}`)
    }
}
