const express = require('express');
const router = express.Router();
const {getPhrase, addPhrase}= require('../Controllers/phrase');
const { addQuestionAndAnswer, getQuestionAndAnswer } = require('../Controllers/question_answer');
const {authenticate} = require('../middleware/authenticate');

router.get('/get-all-phrase',getPhrase); 
router.post('/post-phrase',authenticate,addPhrase);

router.get('/get-all-qna',authenticate,getQuestionAndAnswer);
router.post('/post-question-answer',authenticate,addQuestionAndAnswer);

module.exports = router;