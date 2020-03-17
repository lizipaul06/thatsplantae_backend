const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb+srv://user1:wAM7WhyjnNUacZN8@thatsplantae-mpmxw.mongodb.net/test?retryWrites=true&w=majority')
.then((client) => {
  const db = client.db('garden');
  const plantsCollection = db.collection('plants');
  const plantsRouter = createRouter(plantsCollection);
  app.use('/api/garden', plantsRouter);
})
.catch(console.err);

app.listen(3000, function() {
  console.log(`Listening on port ${
    this.address().port}`);
})
