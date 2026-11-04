const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },  
    msg:{
        type:String,
        maxlength:50
    },  
    create_at:{
        type:Date,
        required:true,
    },
});

// create collection or model
const Chat = mongoose.model('Chat',chatSchema);
module.exports = Chat;