import { Component, OnInit } from '@angular/core';
import { products } from '../produtcts';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notify when product availble!");
  }
}
