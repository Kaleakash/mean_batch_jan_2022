module.exports = (grunt)=> {
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json")
    })

    grunt.registerTask("first",()=> {
        console.log("This is first task")
    });
    
    grunt.registerTask("second",()=> {
        console.log("This is second task")
    });

    grunt.registerTask("third",()=> {
        console.log("This is third task")
    });

    grunt.registerTask("default",["first","second"]);
    // grunt.registerTask("default",()=> {
    //     console.log("Grunt default task executed...")
    // })
}