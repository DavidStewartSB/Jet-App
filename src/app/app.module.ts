import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Components
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductAdminFormComponent } from './admin/pages/product-form/product-form.component';
import { ProductAdminListComponent } from './admin/pages/product-list/product-list.component';
import { ProductPageComponent } from './store/pages/product-page/product-page.component';
import { ProductItemComponent } from './store/components/product-item/product-item.component';
import { FeaturedProductsComponent } from './store/components/featured-products/featured-products.component';
const SHARED_COMPONENTS = [ProductItemComponent,ProductPageComponent, FeaturedProductsComponent,
  ProductAdminListComponent,ProductAdminFormComponent,HeaderComponent, FooterComponent]
//Services
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CategoriesService, ProductsService, SweetAlertService } from './util';

@NgModule({
  declarations: [
    AppComponent,
    ...SHARED_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [CategoriesService, SweetAlertService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
