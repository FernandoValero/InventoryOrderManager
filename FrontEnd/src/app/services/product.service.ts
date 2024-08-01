import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/api/product"

  constructor(private _http: HttpClient) { }

  //Register a Product
  public create(product: Product): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(product);
    return this._http.post(this.url, body, httpOptions);
  }

  //Delete a Product
  public delete(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete(this.url + '/' + id, httpOptions);
  }

  //Update a Product
  public update(product: Product): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(product);
    return this._http.put(this.url + '/' + product._id, body, httpOptions)
  }

  //Get all Products
  public getAll(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get(this.url, httpOptions);
  }

  //Get a Product by ID
  public getById(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get(this.url + '/' + id, httpOptions);
  }

}
