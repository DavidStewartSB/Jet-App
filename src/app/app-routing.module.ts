import { ProductPageComponent } from './store/pages/product-page/product-page.component';
import { ProductAdminFormComponent } from './admin/pages/product-form/product-form.component';
import { ProductAdminListComponent } from './admin/pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductStoreListComponent } from './store/pages/product-store-list/product-store-list.component';


const routes: Routes = [
  {
    path: '',
    component: ProductStoreListComponent
  },
  {
    path: 'listaprodutos',
    component: ProductStoreListComponent
  },
  {
    path: 'listaprodutos/:productid',
    component: ProductPageComponent
  },
  {
    path: 'produtos',
    component: ProductAdminListComponent
  },
  {
    path: 'produtos/formulario',
    component: ProductAdminFormComponent
  },
  {
    path: 'produtos/formulario/:id',
    component: ProductAdminFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
