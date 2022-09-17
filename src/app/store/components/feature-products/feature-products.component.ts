import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@util';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css']
})
export class FeatureProductsComponent implements OnInit {

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
