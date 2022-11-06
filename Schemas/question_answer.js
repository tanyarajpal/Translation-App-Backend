const mongoose = require('mongoose');
const name = 'question_answer';

const question_answer_schema = new mongoose.Schema(
    {
        nepali_question:{
            type:String, 
           required:true
        },
        english_question:{
            type:String,
            required:true
        },
        nepali_answer:{
            type:String,
            required:true
        },
        english_answer:{
            type:String,
            required:true
        }
    }
)

mongoose.model(name,question_answer_schema);

module.exports = {name};