import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _http: HttpClient) { }

  url = "http://localhost:3000/api/supplier"

  //Register a Supplier
  public create(supplier: Supplier): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(supplier);
    return this._http.post(this.url, body, httpOptions);
  }

  //Delete a Supplier
  public delete(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete(this.url + '/' + id, httpOptions);
  }

  //Update a Supplier
  public update(supplier: Supplier): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(supplier);
    return this._http.put(this.url + '/' + supplier._id, body, httpOptions)
  }

  //Get all Suppliers
  public getAll(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get(this.url, httpOptions);
  }

  //Get a Supplier by ID
  public getById(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get(this.url + '/' + id, httpOptions);
  }
}
