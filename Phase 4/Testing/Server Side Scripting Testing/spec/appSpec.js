let request = require("supertest");
let app = require("../src/app");

describe("Rest API Testing ",()=> {

    xit("Employee Details Testing ",(done)=> {
        request(app).get("/api/emp/allEmployee").expect(200).expect(result=> {
            let emp = result.body;
           expect(emp.length).toEqual(5); 
        }).end(err=>{
            if(err){
                    done(err);
            }else {
                done();
            }
        })
    })

    it("Employee Store ",(done)=> {
        let emp = {"_id":7,"name":"Ajay","age":34,"city":"Bangalore"}
        request(app).post("/api/emp/storeEmployee").body(emp).expect(200).expect(result=> {
            let res = result.text;
           expect(res).toEqual("Record stored"); 
        }).end(err=>{
            if(err){
                    done(err);
            }else {
                done();
            }
        })
    })

})
