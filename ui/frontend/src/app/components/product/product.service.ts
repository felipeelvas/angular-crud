import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseApiUrl = "http://localhost:3001/products"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean =false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseApiUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  read(): Observable<Product []> {
    return this.http.get<Product []>(this.baseApiUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  readById(id: any): Observable<Product> {
    const url = ` ${this.baseApiUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  update(product: Product): Observable<Product> {
    const url = ` ${this.baseApiUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }

  delete(id: any): Observable<Product> {
    const url = ` ${this.baseApiUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
