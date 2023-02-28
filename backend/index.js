const express = require('express')
const dotenv = require('dotenv').config().parsed;
const routes = require("./routes/routes.js");

const app = express()
const port = dotenv.PORT;

app.use("/", routes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})