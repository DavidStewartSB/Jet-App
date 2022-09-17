import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductsService } from '@util';

@Component({
  selector: 'products-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any =  Product


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

}
