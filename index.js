require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
require('./db/connection');
const router = require('./routes/route');

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('App is listening on port :', PORT);
})