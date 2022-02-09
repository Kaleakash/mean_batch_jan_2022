let express = require("express");
let {graphqlHTTP} = require("express-graphql")
let {buildSchema} =  require("graphql");

// create the schema which help to provide field name and data type for the field 

var mySchema = buildSchema(`
    type Query {
        message:String 
        id:Int
        empInfo:Employee
        getAllEmployees:[Employee]
    },
    type Employee {
        id:Int,
        name:String,
        age:Int
        salary:Float
    }
`)
let emp = {id:100,name:"Ravi",age:21,salary:250000};
let employees = [
    {id:100,name:"Ravi",age:21,salary:250000},
    {id:101,name:"Ramesh",age:24,salary:2580000},
    {id:102,name:"Rajesh",age:27,salary:320000},
    {id:103,name:"Lokesh",age:28,salary:420000},
    {id:104,name:"Ram",age:30,salary:450000}
]
// return the value when front end call message field as a function 
var root = {
    message :()=>"Welcome to Simple Graph QL App",
    id:()=>100,
    empInfo:emp,
    getAllEmployees:employees
}
// create the reference for expess 
var app = express();
// add the middlewar
// all method get, post , put and delete  
app.use("/graphql", graphqlHTTP({
        schema:mySchema,
        rootValue:root,
        graphiql:true

}))

app.listen(3000,()=>console.log("Graph QL running on port number 3000"))