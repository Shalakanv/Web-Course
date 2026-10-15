const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal});
});

app.get("/ig/:username",(req,res)=>{
    // const followers = ["user1", "user2", "user3"];
    // let { username } = req.params;

    const instaData = require("./data.json");
    console.log (instaData);
    res.render("instagram.ejs");    
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});