const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require("cors");
app.use(cors());
const config = require('./router')
app.use('/api',config.router)
app.listen(80, () => {
  console.log("express running at http://127.0.0.1"); 
});