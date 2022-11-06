const mongoose = require('mongoose');
const phrase_schema  = require('../Schemas/phrase');
const phraseModel = mongoose.model(phrase_schema.name);


function readAll(){
    return phraseModel.find({}).exec();
}

function createInstance(input){
    console.log("here");
    const phrase_instance = new phraseModel(input);
    console.log(phrase_instance)
    return phrase_instance.save();
}

exports.getPhrase =async (req,res)=>{
    readAll().then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(400).json({message:"error fetching all phrases",error:err});
    });
}

exports.addPhrase = async(req,res)=>{
    console.log(req.body)
    createInstance(req.body).then((data)=>{
        res.status(200).json({message:"new phrase added successfully"});
    }).catch((err)=>{
        res.status(400).json({message:"error adding phrase",error:err})
    });
}
