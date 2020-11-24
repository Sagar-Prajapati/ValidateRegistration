const mongoose = require('mongoose');
const users = new mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:100,
        required:true
    },
    email:{
        type:String,
        min:3,
        max:50,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        min:10,
        max:10,
        required:true
    },
    addressLine1:{
        type:String,
        min:3,
        max:100,
        required:true
    },
    addressLine2:{
        type:String,
        min:3,
        max:100,
        required:true
    },
    city:{
        type:String,
        min:3,
        max:100,
        required:true
    },
    state:{
        type:String,
        min:3,
        max:100,
        required:true
    },
    pincode:{
        type:String,
        min:6,
        max:6,
        required:true
    }
});


module.exports = mongoose.model("users",users);