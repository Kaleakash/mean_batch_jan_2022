import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }   // DI for HttpClient



  storeProductInfo(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/storeProduct",product);
  }
}
