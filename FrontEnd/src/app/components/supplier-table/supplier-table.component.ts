import { Component } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-table.component.html',
  styleUrl: './supplier-table.component.css'
})
export class SupplierTableComponent {

  suppliers: Array<Supplier>;

  constructor(private supplierService: SupplierService,
              private router: Router) {
    this.suppliers = [];
    this.loadSuppliers();
  }

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

  public registerSupplier(){
    this.router.navigate(['supplier-form/',0]);
  }

  public updateSupplier(supplier: Supplier){
    this.router.navigate(['supplier-form/', supplier._id]);
  }

  public deleteSupplier(supplier: Supplier){
    this.supplierService.delete(supplier._id).subscribe(
      (result) => {
        this.loadSuppliers();
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
