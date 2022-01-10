let http = require("http");
let url = require("url");
let indexPage = `
<html>
<head>

</head>
<body>
    <h2>Welcome to My Simple Web Application</h2>
    <a href="AboutUs">About Us</a> |
    <a href="ContactUs">Contact Us</a> |
    <a href="Login">Login </a>
</body>
</html>
`
let loginPage =`
            <html>
                    <head>

                    </head>
                    <body>
                        <form action="checkUser" method="get">
                        <label>UserName</label>
                        <input type="text" name="user"/><br/>
                        <label>Password</label>
                        <input type="password" name="pass"/><br/>
                        <input type="submit" value="submit"/>
                        <input type="reset" value="reset"/>
                        </form>
                    </body>
            </html>
`
let server = http.createServer((req,res)=> {
        let urlInfo = url.parse(req.url,true);
        if(urlInfo.path != "/favicon.ico"){
            //console.log("Client send the request ")
            res.setHeader("Content-Type","text/html");
            if(urlInfo.path=="/AboutUs"){
                    res.write("About us Page")
                    res.write("About us Page Description ")
            }
            if(urlInfo.path=="/ContactUs"){
                res.write("<h2>Welcome to contact us page </h2>")
            }
            if(urlInfo.path=="/Login"){
                res.write(loginPage);
            }
            if(urlInfo.pathname=="/checkUser"){
                //res.write("you filled form")
                let login = urlInfo.query
                if(login.user=="Ajay" && login.pass=="123"){
                            res.write("Succesfuly login")
                }else {
                        res.write("failure try once again")
                }
            }
            if(urlInfo.path=="/"){
                res.write(indexPage);
            }
        }
        //res.end("Welcome to Simple Application");
        res.end();      // end the connection s 
})

server.listen(9292,()=>console.log("Server running on port number 9292"))