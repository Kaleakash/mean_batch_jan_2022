import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
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
storeResult:string="";
products:Array<Product>=[];   // product array is use to store the records;
constructor(public pser:ProductService) { } // DI for the ProductService

// life cycle method it will call once after component loaded..
  ngOnInit(): void {
      this.retrieveProduct();
  }
  storeProduct() {
    let productRef = this.product.value;
    //console.log(productRef)
    this.pser.storeProductInfo(productRef).
    subscribe(result=>this.storeResult=result.msg,error=>console.log(error));
  }

  retrieveProduct() {
    this.pser.retreiveProductDetails().subscribe(result=>this.products=result,error=>console.log(error));
  }
}
