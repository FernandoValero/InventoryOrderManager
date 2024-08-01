import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

  products: Product[];
  
  constructor(private productService: ProductService,
    private router: Router) {
    this.products = [];
    this.loadProducts();
  }

  // Load products to display in table
  public loadProducts(): void {
    this.productService.getAll().subscribe(
      (result) => {
        this.products = [];
        this.products = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // Navigate to the Product form to add a Product
  public registerProduct(): void {
    this.router.navigate(['product-form/', 0]);
  }

  // Navigate to the Product form to edit a Product
  public updateProduct(product: Product): void {
    this.router.navigate(['product-form/', product._id]);
  }

  // Delete a Product from the database and table
  public deleteProduct(product: Product): void {
    this.productService.delete(product._id).subscribe(
      (result) => {
        this.loadProducts();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
