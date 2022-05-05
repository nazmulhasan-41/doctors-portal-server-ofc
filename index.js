const express = require('express')
const app = express()
const port = 5000;
var cors = require('cors')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jyuwz.mongodb.net/doctorsDB?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("doctorsDB").collection("appointments");

  console.log('connected successfully');
  

  app.get('/', (req, res) => {
    res.send('Hello Whjhjhjhjorld!')
  })

});



app.listen(process.env.PORT || port)