import { Routes } from '@angular/router';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';

export const routes: Routes = [

    //Supplier route
    { path: 'suppliers', component: SupplierTableComponent},
    { path: 'supplier-form/:id', component: SupplierFormComponent }
];
