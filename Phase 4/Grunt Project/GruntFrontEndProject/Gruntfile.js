module.exports = (grunt)=> {
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json")
    });
    grunt.registerTask("remove",()=> {
        grunt.config("clean",{
            contents:["dist/*"]
        })
        grunt.task.run("clean");
    })
    grunt.registerTask("copyBuildFiles",()=> {
        grunt.config("copy",{
            main:{
                expand:true,
                cwd:"src",
                src:"**",
                dest:"dist/"
            }
        })
        grunt.task.run("copy")
    })
    grunt.registerTask("jsTask",()=> {
        grunt.initConfig({
            uglify: {
                my_target:{
                    files: {
                        "dist/js/main.min.js":["src/js/*.js"]
                    }
                }
            }
        });
        grunt.task.run("uglify");
    })
    // pre-defined task
    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.loadNpmTasks("grunt-contrib-uglify")

    grunt.registerTask("default",["copyBuildFiles","jsTask"])
}