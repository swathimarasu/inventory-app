import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';

import { Search } from './search';

@Injectable({ providedIn: 'root' })
export class SearchService {

  private totalProducts:any;

  private searchUrl = "http://localhost:9090/products/availability/list?"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }



  /* GET Products whose name contains search terms */
  searchProducts(name: string, deptName: string): Observable<Search[]> {
    if (!name.trim() && !deptName.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
     console.log(`Got request for products with  "${name}" and/or "${deptName}"`);

     // Uses http.get() to load data from a single API endpoint
      //this.searchUrl = `${this.searchUrl}department=${deptName}&product=${name}`
      
      //this.searchUrl = `${this.searchUrl}${queryParam}`;
      console.log(`search api url "${this.searchUrl}`)
       //this.http.get<any>(`${this.searchUrl}department=${deptName}&product=${name}`).subscribe(data => {
           // this.totalProducts= data;
        // })
      
        // return this.totalProducts;
      return this.http.get<Search[]>(`${this.searchUrl}department=${deptName}&product=${name}`).pipe(map((response: any) => response));

  }


  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
