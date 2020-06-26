import { Component , Input} from '@angular/core';


import { Search } from '../search';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productResults: Search[];

  share() {
    window.alert('The product has been shared!');
  }
}