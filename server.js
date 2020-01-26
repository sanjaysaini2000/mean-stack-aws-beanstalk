/**
 * for express web server
 */
const bodyParser = require('body-parser');
require('./db');
const customer = require('./Controller/CustomerController');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//added middleware code
app.use(cors());
app.use(bodyParser.json());
app.use('/customers', customer);

app.use(express.static(path.join(__dirname, '/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = process.env.port || 8081;
app.listen(port, () => {
  console.log(`server listening at port :${port}`);
});
