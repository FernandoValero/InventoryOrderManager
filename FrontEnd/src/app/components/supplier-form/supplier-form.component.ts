import { Component } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Notyf } from 'notyf';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.css'
})
export class SupplierFormComponent {

  notyf = new Notyf({
    duration: 5000,
    position: {
      x: 'right',
      y: 'top',
    }
  });

  supplier!: Supplier;
  action!: string;
  constructor(private supplierService: SupplierService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.initVariables();
  }

  //init method to load the supplier data for update
  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params) =>{
      if (params['id']== '0'){
        this.action = 'new';
      } else{
        this.action = 'update';
        this.loadSupplierToForm(params['id']);
      }
    });
  }

  //Initialize variables
  public initVariables(){
    this.supplier = new Supplier();
  }

  //Register a new Supplier 
  public registerSupplier(): void {
    this.supplierService.create(this.supplier).subscribe(
      (result)=>{
        if (result.status == 1){
          this.notyf.success("Supplier registered successfully!");
          this.router.navigate(['/suppliers']);
        }
      },
      (error)=>{
        console.log(error);
      })
  }


  //Load the Supplier to the form for update
  public loadSupplierToForm( idSupplier: string ): void {
    this.supplierService.getById(idSupplier).subscribe(
      (result) => {
        Object.assign(this.supplier, result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Update an existing Supplier
  public updateSupplier(supplier: Supplier){
    this.supplierService.update(supplier).subscribe(
      (result) => {
        if (result.status == 1){
          console.log("Supplier updated successfully!");
          this.router.navigate(['/suppliers']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
