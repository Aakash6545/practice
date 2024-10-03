const express = require('express');

const app = express();

const middle = (req,res,next)=> {
     console.log(req.method , (new Date()).getFullYear())
     next()
}

app.get('/',middle,(req,res)=>{
    res.end("home")
})

app.listen(5000,()=>{
    console.log("app is listening on port 5000")
})