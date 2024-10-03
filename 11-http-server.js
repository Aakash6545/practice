const {createServer} = require('http');

const server = createServer((req,res) =>{
    if(req.url === "/"){
        res.end(`<h1>this is home page</h1>`);
    }
    else if(req.url === "/about"){
        res.end(`<h1>this is the about page</h1>`);
    }
    else if(req.url === "/page1"){
        res.end(`<h1>this is the page no 1</h1>`);
    }
    else{
        res.end(`<h1>The page you requested did not exist</h1>
                <a href="/">back to home</a>`);
    }
})

server.listen(3000,()=>{
    console.log("listening")
});
console.log("started");