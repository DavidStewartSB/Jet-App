import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductAdminFormComponent } from './admin/pages/product-form/product-form.component';
import { ProductAdminListComponent } from './admin/pages/product-list/product-list.component';
import { ProductPageComponent } from './store/pages/product-page/product-page.component';
import { FeatureProductsComponent } from './store/components/feature-products/feature-products.component';
import { ProductItemComponent } from './store/components/product-item/product-item.component';
const SHARED_COMPONENTS = [ProductPageComponent,FeatureProductsComponent, ProductItemComponent,
  ProductAdminListComponent,ProductAdminFormComponent,HeaderComponent, FooterComponent]
  //Services
  import { CategoriesService, ProductsService, SweetAlertService } from './util';
  //External Styles
  import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductStoreListComponent } from './store/pages/product-store-list/product-store-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ...SHARED_COMPONENTS,
    ProductStoreListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [CategoriesService, ProductsService, SweetAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
