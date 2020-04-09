const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const { PORT } = process.env;
const DB = process.env.MONGO;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connect to DB');
  app.listen(PORT, () => {
    console.log('Running in port ', PORT);
  });
}).catch((error) => {
  console.log('error:', error);
});

const routesV1 = require('./routes/v1/index');

console.log(DB);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routesV1(app);


