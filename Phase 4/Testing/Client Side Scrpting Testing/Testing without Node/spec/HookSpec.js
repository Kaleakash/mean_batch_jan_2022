describe("Hook testing ",()=> {

    beforeAll(()=> {
        console.log("It call before all it function")
    });
    beforeEach(()=> {
        console.log("It call before each it function")
    })
    it("1st it, Check true value ",()=> {
        console.log("It to check true value");
        expect(true).toBeTruthy();
    })
    it("2nd it, Check false value ",()=> {
        console.log("it to check false value");
        expect(false).toBeFalsy();
    })
    afterEach(()=> {
        console.log("It call after each it function")
    })
    afterAll(()=> {
        console.log("It call after all it function")
    })

})