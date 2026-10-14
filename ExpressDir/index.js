const express = require("express");
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// app.use((req,res) => {
//     console.log("request received");
//     res.send("This is a basic response");
// });

app.get("/",(req,res)=>{
    res.send("Hello,I am root");
});

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// });

// app.get("/banana",(req,res)=>{
//     res.send("You contacted banana path");
// });

// app.get("/{*splat}", (req, res) => {
//     res.send("This path is not defined");
// });

// app.post("/",(req,res)=>{
//     res.send("You sent a POST request");
// });

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let { username, id } = req.params;
    let html = `<h1>Hello ${username}, your id is ${id}</h1>`;
    res.send(html);
});
    
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results");
});