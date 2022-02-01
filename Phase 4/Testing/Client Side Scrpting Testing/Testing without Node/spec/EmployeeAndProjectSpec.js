describe("Employee and Project Testing ",()=> {
    let emp;
    let proj
    beforeEach(()=> {
        emp = new EmployeeDetails();
        proj = new Project();
    })

    it("Employee function testing ",()=> {
        let res = emp.display();
        expect(res).toBe("This is Employee class object");
    })

    it("Project function testing ",()=> {
        let res = proj.projectInfo();
        expect(res).toBe("This is project info object");
    })

    it("checking project details through employee",()=> {
        let res = emp.checkProjectDetails();    // it call actual function 
        expect(res).toBe("This is project info object");
    })


    it("Fake project object in employee object ",()=> {
        let employee = new EmployeeDetails();
        // 1st parmeter object and second fake function 
        spyOn(employee,"checkProjectDetails").and.callFake(()=> {
            return "Fake Call";
        });
        let res = employee.checkProjectDetails();
        expect(res).toBe("Fake Call");

    })
})