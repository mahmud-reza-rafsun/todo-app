const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// middle ware

app.use(cors());
app.use(express.json());

// basic setup
app.get('/', async (req, res) => {
    const app = "task server is running";
    res.send(app);
});
app.listen(port, async (req, res) => {
    console.log(`server is running on ${port}`);
})