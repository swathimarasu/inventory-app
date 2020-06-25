import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Search } from '../search';
import { SearchService } from '../search.service';

@Component({
  selector: 'product-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
  searchResult: Observable<Search[]>;

  constructor(private searchService: SearchService) {}

  searchProducts(name: HTMLInputElement, deptName: HTMLInputElement, ){
    console.log("function called");
    console.log("name & deptName values captured from Search Component ", name.value, deptName.value);
    this.searchResult = this.searchService.searchProducts(name.value, deptName.value);
    console.log(this.searchResult )
  }
  // // Push a search term into the observable stream.
  // search(term: string): void {
  //   this.searchProducts.next(term);
  // }

  //ngOnInit(): void {
    // this.searchResult$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((name: string, deptName: string) => this.searchService.searchProducts(name, deptName)),
    // );
  //}
  ngOnInit() {
    //this.data.currentMessage.subscribe(searchResult => this.searchResult$ = searchResult)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/