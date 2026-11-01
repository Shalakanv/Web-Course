const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
    .then((res) => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error(err);
    });

async function main() {
    // mongoose ka database ke sath connection establish karne ke liye ye function use hota hai aur hum use await ke sath call karte hai taki ye asynchronous function ho jaye aur hume promise ka result mil sake.
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

User.findOneAndDelete({name:"Peter"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
});

// User.findByIdAndUpdate('6ae702062b592bc0c91762d9', {age:22},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// });

// User.find({age:{ $gt: 45 }}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// });

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"Stark",email:"stark@gmail.com",age:40}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// });

// const user2 = new User({
//     name: "Bela",
//     email: "bela@gmail.com",
//     age: 23
// });

// user2
//     .save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     });