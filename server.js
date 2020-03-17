const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const createRouter = require('/Users/elizabethpaul/CX_G17/codeclan_work/thatsplantaebackend/thatsplantae_backend/helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

// MongoClient.connect('mongodb+srv://user1:wAM7WhyjnNUacZN8@thatsplantae-mpmxw.mongodb.net/test?retryWrites=true&w=majority')
// .then((client) => {
//   const db = client.db('garden');
//   const plantsCollection = db.collection('plants');
//   const plantsRouter = createRouter(plantsCollection);
//   a
// })
// .catch(console.err);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user1:wAM7WhyjnNUacZN8@thatsplantae-mpmxw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("garden").collection("plants");
  // perform actions on the collection object
  const plantsRouter = createRouter(collection);
  app.use('/api/garden', plantsRouter);
  client.close();
});

app.listen(3000, function() {
  console.log(`Listening on port ${
    this.address().port}`);
})
