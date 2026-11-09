const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//     console.log("Hi,I am middleware");
//     next();
// });

// logger - morgan
// app.use((req,res,next)=>{
//     req.time = Date.now();
//     console.log(req.time);
//     console.log(req.method,req.hostname,req.path);
//     next();
// });

// middleware works for specific path
app.use("/random",(req,res,next)=>{
    console.log("I am only for random");
    next();
})

app.get("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED");
})

app.get("/api",(req,res)=>{
    res.send("data");
})

app.get("/",(req,res)=>{
    res.send("Hi I am root");
})

app.get("/random",(req,res)=>{
    res.send("This is a random page");
})

app.use((req,res)=>{
    res.send("page not found");
})

app.listen(8080,()=>{
    console.log("Server listening on port 8080");
});