import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product = new FormGroup({
  pid :new FormControl(),
  pname:new FormControl(),
  price : new FormControl(),
  url : new FormControl()
})
  constructor(public pser:ProductService) { } // DI for the ProductService

  ngOnInit(): void {
  }
  storeProduct() {
    let productRef = this.product.value;
    //console.log(productRef)
    this.pser.storeProductInfo(productRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}
