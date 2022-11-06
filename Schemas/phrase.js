const mongoose = require('mongoose');
const name = 'phrase';

const phrase_schema = new mongoose.Schema({
    nepali_phrase:{
        type:String,
        required:true
    },
    english_phrase:{
        type:String,
        required:true
    }
});

mongoose.model(name,phrase_schema);

module.exports = {name};