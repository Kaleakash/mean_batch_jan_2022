let obj = require("readline");
let abc = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

abc.question("Enter the name",(name)=> {
    console.log("Welcome user "+name);
    abc.close();
})

