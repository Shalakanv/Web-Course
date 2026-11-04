const mongoose = require('mongoose');
const chat = require('./Models/chat.js');

main()
    .then((res) => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let Allchats = [
    {
        from:"Neha",
        to:"Shubhangi",
        msg:"Hello, how are you?",
        create_at: new Date(),
    },
    {
        from:"Shalaka",
        to:"Shubhangi",
        msg:"I am not angry with you",
        create_at: new Date(),
    },
    {
        from:"Shubhangi",
        to:"Shalaka",
        msg:"Good to hear that",
        create_at: new Date(),
    },
    {
        from:"Shubhangi",
        to:"Ajit",
        msg:"When will you come to college?",
        create_at: new Date(),
    },
    {
        from:"Ajit",
        to:"Shubhangi",
        msg:"I will come tomorrow",
        create_at: new Date(),
    },
    {
        from:"Harsh",
        to:"Shalaka",
        msg:"Can I bring rackets for today's match?",
        create_at: new Date(),
    },
];


chat.insertMany(Allchats);

