const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.status(200).send("Route is OK")
})

connectDB()