const mongoose = require('mongoose');

const question_answer_schema  = require('../Schemas/question_answer');
const questionAnswerModel = mongoose.model(question_answer_schema.name);


function readAll(){
    return questionAnswerModel.find({}).exec();
}

function createInstance(input){
    const question_answer_instance = new questionAnswerModel(input);
    return question_answer_instance.save();
}

exports.getQuestionAndAnswer =async (req,res)=>{
    readAll().then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(400).json({message:"error fetching all phrases",error:err});
    });
}

exports.addQuestionAndAnswer = async(req,res)=>{
    createInstance(req.body).then((data)=>{
        res.status(200).json({message:"new question and its answer added successfully"});
    }).catch((err)=>{
        res.status(400).json({message:"error adding question and its answer",error:err})
    });
}