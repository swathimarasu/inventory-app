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
  ngOnInit() {
    
  }
}