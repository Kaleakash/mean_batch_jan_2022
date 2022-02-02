import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing-app';
  id:number =100;
  name:string ="Raj";
  res:boolean = true;
  names:Array<string>=["Ajay","vijay","Mahesh","Lokesh"];
  employees:Array<Employee>=[];
  constructor(){
    let emp1 = new Employee(1,"Ravi",21);
    let emp2 = new Employee(2,"Ramesh",25);
    let emp3 = new Employee(3,"Lokesh",28);
    let emp4 = new Employee(4,"Mahesh",31);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    this.employees.push(emp4);
    }
    flag:string="";
    msg:string="";
    checkUser(name:string,pass:string){
      if(name=="Raj" && pass=="123"){
          this.msg="successfully login"
      }else {
          this.msg="failure try once again";
      }
    }

    fun() {
      console.log("event fired")
      this.flag="welcome";
      console.log(this.flag)
    }
}
