const express = require('express')
const dotenv = require('dotenv').config().parsed;
const app = express()
const port = dotenv.PORT
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})