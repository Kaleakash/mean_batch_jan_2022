import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FakeService {
  // DI for Http Client API 
  constructor(public http:HttpClient) { }

  sayHello(name:string):string {
    return "Welcome "+name;
  }

  loadAllBooksDetails():Observable<Book[]> {
    return this.http.get<Book[]>("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
  }
}
