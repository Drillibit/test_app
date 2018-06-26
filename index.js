const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://drillbit:293344asd@ds219641.mlab.com:19641/test-to-do')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Running at http://localhost:${PORT}/`);
