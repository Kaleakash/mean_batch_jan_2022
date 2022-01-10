let obj = require("readline");
let abc = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

abc.question("Enter the id ",(id)=> {

    abc.question("Enter the name",(name)=> {

        abc.question("Enter the age ",(age)=> {
            console.log("id is "+id);
            console.log("name is "+name);
            console.log("age is "+age);
            abc.close();
        })
    })
})

