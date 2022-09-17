import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@util';

@Component({
  selector: 'app-product-store-list',
  templateUrl: './product-store-list.component.html',
  styleUrls: ['./product-store-list.component.css']
})
export class ProductStoreListComponent implements OnInit {

  products: Product[] = []
  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    this._getServices()
  }

  private _getServices(): void {
    this.prodService.getProducts().subscribe(resProducts => {
      this.products = resProducts
    })
  }

}
