import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Product, ProductsService, SweetAlertService } from '@util';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductAdminListComponent implements OnInit {
  products: any = []
  categories: Category[] = []
  endsubs$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private productService: ProductsService,
    private alertService: SweetAlertService
    ) { }

  ngOnInit(): void {
    this._getProducts()
  }
  ngOnDestroy(){
    this.endsubs$.complete();
  }
  deleteProduct(product: Product){
    this.productService.deleteProduct(product).subscribe({
      next: () => this.alertService.successSwal('Produto deletado', 'Sucesso'),
      error: () => this.alertService.errorSwal('Tente novamente mais tarde', 'Erro'),
      complete: () => this._getProducts()
    })
  }
  _getProducts(){
    this.productService.getProducts().pipe(takeUntil(this.endsubs$)).subscribe(products => {
      this.products = products
      console.log(this.products)
    })
  }
  updateProduct(productId: string){
    this.router.navigateByUrl(`produtos/formulario/${productId}`)
  }
}
