const {PORT,DB_URL} = require('./configuration');
const express = require('express')
const mongoose = require('mongoose');
const app = express()

const routes = require('./Routes/routes');

const cors = require('cors');

const port = PORT;
const url = DB_URL;


app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send("hello world")
})

app.use('/api/nepali_translation',routes)

mongoose.connect(url,{serverSelectionTimeoutMS:10000}).then(()=> console.log("Database connected"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})