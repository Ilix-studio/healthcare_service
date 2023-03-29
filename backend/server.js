const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.status(200).send("Route is OK")
})

connectDB()
app.use("/api/users", require("./routes/userRoutes"))