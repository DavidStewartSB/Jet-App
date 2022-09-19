import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@util';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: any = Product;
  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['productid']) {
        this._getProduct(params['productid']);
      }
    })  
  }

  private _getProduct(id: string) {
    this.prodService.getProduct(id).subscribe(resProduct => {
      this.product = resProduct
    })
  }

}
