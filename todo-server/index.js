const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// middle ware

app.use(cors());
app.use(express.json());

// mongodb uri


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uuac6m8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const todoCollection = client.db('todo-app').collection('add-todo');

    app.post('/add-todo', async (req, res) => {
      const data = req.body;
      const result = await todoCollection.insertOne(data);
      res.send(result);
    })
    // get from db
    app.get('/add-todo', async (req, res) => {
      const result = await todoCollection.find().toArray();
      res.send(result);
    });
    // delete single todo in db
    app.delete('/delete/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await todoCollection.deleteOne(query);
      res.send(result);
    })
    // status-update
    app.patch('/status-update/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { status: "Complete" }
      }
      const result = await todoCollection.updateOne(query, updateDoc);
      res.send(result);
    })
    // update todo 
    app.patch('/update-todo/:id', async (req, res) => {
      const id = req.params.id;
      const todoData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: todoData
      }
      const result = await todoCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    // get a specific
    app.get('/single-todo/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const result = await todoCollection.findOne(filter);
      res.send(result);
    })


    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// basic setup
app.get('/', async (req, res) => {
  const app = "task server is running";
  res.send(app);
});
app.listen(port, async (req, res) => {
  console.log(`server is running on ${port}`);
})