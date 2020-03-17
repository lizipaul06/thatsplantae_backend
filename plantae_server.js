const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();

// .then((client) => {
//   const db = client.db('garden');
//   const plantsCollection = db.collection('plants');
//   const plantsRouter = createRouter(plantsCollection);
//   app.use('/api/garden', plantsRouter);
// })
// .catch((err) => {
//   console.error(err);
//   res.status(500);
//   res.json({status:500, error: err});
// });


// connect Mongoose to your DB
var mongoose = require(‘mongoose’);
mongoose.connect(process.env.MONGODB_URI || mongodb:user1:6d@ag8F!s9waCNM@ds259119.mlab.com:59119/heroku_75k010c4);

const port = process.env.PORT || 3000;
app.listen(port);
