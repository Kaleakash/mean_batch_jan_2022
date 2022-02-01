// ES5 style object creation
function Customer(cid,cname,age) {
        // property of customer object 
        this.cid = cid;     
        this.cname = cname;
        this.cage =  age;   // age id local and cage is instance 
        // behaviour of customer object while creating customer object 
        this.getAge=() => {
            return this.cage;
        }
        this.getId = ()=> {
            return this.cid
        }
        // this.getName = ()=> {
        //    return this.cname;
        // }
}
// adding behaviour dynamically. 
Customer.prototype.getName=function(){
    console.log(this.cname)
    return this.cname;
}
//ES6 style object creation 
class Employee {
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}