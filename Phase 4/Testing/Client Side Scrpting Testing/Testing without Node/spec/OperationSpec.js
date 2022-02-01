describe("Operation Testing ",()=> {
    
    it("Addition Testing ",()=> {
        let res = add(10,20);
        expect(30).toEqual(res);
    })


    it("Substraction Testing",()=> {
        let res = sub(20,10);
        expect(10).toEqual(res);
    })

    it("Multiplication Testing",()=> {
        let res = mul(20,10);
        expect(200).toEqual(res);
    })

    it("Division Testing",()=> {
        let res = div(20,10);
        expect(2).toEqual(res);
    })

})