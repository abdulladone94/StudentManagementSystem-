require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 8070;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(3002, () => {
  console.log("Port 3002 up & running");
});
