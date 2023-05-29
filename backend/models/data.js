const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema=new Schema({
    serverName:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    protocol:{
        type: String,
        required: true
    }
},{timestamps:true});

const Data = mongoose.model('Data',dataSchema);
module.exports=Data;