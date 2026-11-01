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
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type: String,
    },
    price:{ 
        type: Number,
    },
    discount:{
        type: Number,
        default: 0,
    },
    category:{
        type: String,
        enum: ["Fiction","Non-Fiction"],
    },
});  

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "Marvel Comics",     
    price: 400,
    category: "Fiction",
});  

book1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });        
