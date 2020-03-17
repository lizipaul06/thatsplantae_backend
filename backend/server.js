const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080

const createRouter = require('/Users/elizabethpaul/CX_G17/codeclan_work/thatsplantaebackend/thatsplantae_backend/helpers/create_router.js');

app.use(express.static(_dirname + "/dist/"));
app.get(/.*/, function(req,res){
  res.sendfile(_dirname + "/dist/index.html");
});

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

});

app.listen(PORT, function() {
  console.log(`Listening on port ${
    this.address().port}`);
})
