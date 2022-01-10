let url = require("url");

let urlPath = "http://localhost:9999/home?name=Raj&age=21";
console.log(urlPath)
let urlRef = url.parse(urlPath,true);
//console.log(urlRef);
console.log(urlRef.protocol)
console.log(urlRef.host)
console.log(urlRef.hostname)
console.log(urlRef.port)
console.log(urlRef.pathname)
console.log(urlRef.query)
let emp = urlRef.query
console.log("Name is "+emp.name);
console.log("Age is "+emp.age)