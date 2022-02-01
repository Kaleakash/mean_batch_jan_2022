describe("Login Testing ",()=> {

    it("Check Login Testing ",()=> {
        let res = checkLoginDetails("Raj","123");
        expect(res).toBeTrue();
    })

    it("sayHello function testing ",()=> {
        let res = sayHello("Raj Deep");
        expect(res).toContain("Raj")
    })
})