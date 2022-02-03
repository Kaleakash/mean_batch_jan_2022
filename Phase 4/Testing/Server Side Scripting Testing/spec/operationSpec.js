var obj = require("../src/operation");

describe("Operation Testing ",()=> {
    it("Addition testing ",()=> {
        let res = obj.add(10,20);
        expect(res).toEqual(30);
    })
    it("Substraction testing ",()=> {
        let res = obj.sub(20,10);
        expect(res).toEqual(10);    
    })
    it("Multiplication ",()=> {
        let mul = obj.mul(4,2);
        expect(mul).toEqual(8);
    })
    it("Division ",()=> {
        let div = obj.div(10,5);
        expect(div).toEqual(2);
    })

})