describe("User Defined Object Testing ",()=> {
    
    
    it("ES5 style object creation ",() => {
        var cust = new Customer(100,"Raju",21);
        expect(cust.getId()).toEqual(100);
        expect(cust.getName()).toBe("Raju");
        expect(cust.getAge()).toBeGreaterThan(18);
    })

    it("ES6 style object creation ",()=> {
        let emp = new Employee(1,"Ajay",21);
        expect(emp.getId()).toEqual(1);
        expect(emp.getName()).toBe("Ajay");
        expect(emp.getAge()).toBeGreaterThan(18);
    })

})