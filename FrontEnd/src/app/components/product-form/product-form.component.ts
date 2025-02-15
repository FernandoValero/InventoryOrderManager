import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Notyf } from 'notyf';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Supplier } from '../../models/supplier';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  notyf = new Notyf({
    duration: 5000,
    position: {
      x: 'right',
      y: 'top',
    }
  });

  product!: Product;
  suppliers!: Supplier[]
  action!: string;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private supplierService: SupplierService) {
    this.initVariables();
  }

  //init method to load the product data for update
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == '0') {
        this.action = 'new';
      } else {
        this.action = 'update';
        this.loadProductToForm(params['id']);
      }
    });
  }

  //Initialize variables
  public initVariables(): void {
    this.product = new Product();
    this.suppliers = [];
    this.loadSuppliers();
  }

  //Register a new product 
  public registerProduct(): void {
    this.productService.create(this.product).subscribe(
      (result) => {
        if (result.status == 1) {
          this.notyf.success("Product registered successfully!");
          this.router.navigate(['/products']);
        }
      },
      (error) => {
        console.log(error);
      })
  }


  //Load all suppliers
  public loadSuppliers(): void {
    this.supplierService.getAll().subscribe(
      (result) => {
        this.suppliers = [];
        this.suppliers = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Load the product to the form for update
  public loadProductToForm(idProduct: string): void {
    this.productService.getById(idProduct).subscribe(
      (result) => {
        Object.assign(this.product, result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Update an existing product
  public updateProduct(product: Product): void {
    this.productService.update(product).subscribe(
      (result) => {
        if (result.status == 1) {
          console.log("Product updated successfully!");
          this.router.navigate(['/products']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
