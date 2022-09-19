import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category, ProductsService, SweetAlertService } from '@util';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductAdminFormComponent implements OnInit {
  editmode = false;
  copyButton = ''
  form: any = FormGroup;
  isSubmitted = false;
  catagories: Category[] = [];
  imageDisplay: any;
  header = ''
  currentProductId: string =''
  

  
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private alertService: SweetAlertService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }

//Functions
  get productForm() {
    return this.form.controls;
  }
  onCancle() {
    this.location.back();
  }
  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    const productFormData = new FormData();
    Object.keys(this.productForm).map((key) => {
      productFormData.append(key, this.productForm[key].value);
    });
    if (this.editmode) {
      this._updateProduct(productFormData);
    } else {
      this._addProduct(productFormData);
    }
  }
//Privates Functions
 private _getCategories(){
  this.categoryService
  .getCategories()
  .subscribe((categories) => {
    this.catagories = categories;
    console.log(categories)
  });
 }
 private _addProduct(productFormData: FormData) {
  this.productService
    .createProduct(productFormData)
    .subscribe({
      next: () => this.alertService.successSwal('Produto Adicionado', 'Sucesso'),
      error: () => this.alertService.errorSwal('Tente novamente mais tarde', 'Error'),
      complete: () => this.location.back()
    })
}
private _updateProduct(productFormData: FormData) {
  this.productService
    .updateProduct(productFormData, this.currentProductId)
    .subscribe({
      next: () => this.alertService.successSwal('Produto Atualizado', 'Sucesso'),
      error: () => this.alertService.errorSwal('Tente novamente mais tarde', 'Error'),
      complete: () => this.location.back()
    })
}
private _checkEditMode() {
  this.route.params.subscribe((params) => {
    if (params['id']) {
      this.editmode = true;
      this.header = 'Edite o Produto'
      this.copyButton = 'Atualizar'
      this.currentProductId = params['id'];
      this.productService
        .getProduct(params['id'])
        .subscribe((product) => {
          this.productForm.name.setValue(product.name);
          this.productForm.category.setValue(product.category);
          this.productForm.price.setValue(product.price);
          this.productForm.description.setValue(product.description);
          this.productForm.countInStock.setValue(product.countInStock);
          this.productForm.promo.setValue(product.promo);
          this.productForm.status.setValue(product.status);
          this.imageDisplay = product.image;
          this.productForm.image.setValidators([]);
          this.productForm.image.updateValueAndValidity();
        });
    } else {
      this.header = 'Adicione um Produto'
      this.copyButton = "Adicionar"
    }
  });
}
private _initForm(){
  this.form = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    promo: ['', Validators.required],
    image: ['', Validators.required],
    category: ['', Validators.required],
    images: [''],
    countInStock: [''],
    status: [false]
  });
 }

}
