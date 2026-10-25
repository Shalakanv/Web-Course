const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); 
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
// connecting db to server

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:  'Shala@26'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ]
};

// let data = [];
// for(let i=1;i<=100;i++)
// {
//   data.push(getRandomUser()); // 100 fake users
// }

// let q = "INSERT INTO user (id,username,email,password) VALUES ? ";
// let users = [["123b","123_newuserb","abc@gmail.comb","abcb"],["123c","123_newuserc","abc@gmail.comc","abcc"]];

// try{
//     connection.query(q,[data],(err,result)=>{
//       if(err) throw err;
//       console.log(result);
//     });
// } catch(err){
//   console.log(err);
// }

// connection.end();

app.get("/",(req,res)=>{
  let q = "SELECT count(*) from user";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    });
  } catch(err){
  console.log(err);
  res.send("Some error in database");
}

});

app.get("/user",(req,res)=>{
  let q = "SELECT * FROM USER";
  try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      res.render("users.ejs",{users});
    });
    } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE  id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    });
    } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Update route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password: formPass,username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE  id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("WRONG Password");
      }else{
        let  q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
    } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/user/new",(req,res)=>{
  let {username,email,password} = req.body;
  let id = uuidv4();
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
    } catch(err){
    res.send("Some error in database");
  }
});

// app.post("/addFakeUser", (req, res) => {
//   let user = getRandomUser();

//   let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

//   connection.query(q, user, (err, result) => {
//     if (err) {
//       console.log(err);
//       return res.send("Error adding random user");
//     }

//     res.redirect("/user");
//   });
// });

// app.post("/user/:id/delete", (req, res) => {
//     let { id } = req.params;
//     let q = `SELECT * FROM user WHERE id='${id}'`;
//     try {
//       connection.query(q, (err, result) => {
//         if (err) throw err;
//         let user = result[0];
//         res.render("delete.ejs", { user });
//       });
//     } catch (err) {
//       res.send("some error with DB");
//     }
// });

// app.listen("3000",()=>{
//   console.log("Server is listening");
// });
