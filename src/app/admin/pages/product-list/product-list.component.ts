import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService, SweetAlertService } from '@util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductAdminListComponent implements OnInit {
  products: any = []
  constructor(
    private router: Router,
    private productService: ProductsService,
    private alertService: SweetAlertService
    ) { }

  ngOnInit(): void {
    this._getProducts()
  }
  deleteProduct(product: Product){
    this.productService.deleteProduct(product).subscribe({
      next: () => this.alertService.successSwal('Produto deletado', 'Sucesso'),
      error: () => this.alertService.errorSwal('Tente novamente mais tarde', 'Erro'),
      complete: () => this._getProducts()
    })
  }
  _getProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
  updateProduct(productId: string){
    this.router.navigateByUrl(`produtos/formulario/${productId}`)
  }
}
