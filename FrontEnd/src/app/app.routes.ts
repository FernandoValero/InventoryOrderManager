import { Routes } from '@angular/router';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    //Supplier routes
    { path: 'suppliers', component: SupplierTableComponent },
    { path: 'supplier-form/:id', component: SupplierFormComponent },

    //Product routes
    { path: 'products', component: ProductTableComponent },
    { path: 'product-form/:id', component: ProductFormComponent },

    //User routes
    { path: 'users', component: UserTableComponent },
    { path: 'user-form/:id', component: UserFormComponent },

    //Login routes
    { path: 'login', component: LoginComponent }
];
