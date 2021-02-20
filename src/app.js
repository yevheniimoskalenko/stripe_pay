const express = require("express");
const chalk = require("chalk");
// const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const api = require("./routers/api.routes.js");
const app = express();
// mongoose
//   .connect(process.env.db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log(chalk.green(`connect has started...`)));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);
module.exports = app;
