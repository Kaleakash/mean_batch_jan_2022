import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }   // DI for HttpClient


  // post method 2 parameter 1st parameter url and 2nd parameter json object 
  storeProductInfo(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/storeProduct",product);
  }

  // get method 1 parameter ie 1st parameter url 
  retreiveProductDetails():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/allProducts");
  }
}
