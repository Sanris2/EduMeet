const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())

module.exports = app;