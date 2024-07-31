import { Routes } from '@angular/router';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [

    //Supplier routes
    { path: 'suppliers', component: SupplierTableComponent },
    { path: 'supplier-form/:id', component: SupplierFormComponent },

    //Product routes
    { path: 'products', component: ProductTableComponent },
    { path: 'product-form/:id', component: ProductFormComponent }
];
