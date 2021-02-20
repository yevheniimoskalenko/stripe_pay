const express = require("express");
require("dotenv").config();
const cors = require("cors");
const api = require("./routers/api.routes.js");
// const stripe = require("stripe")(process.env.sec);
const app = express();
// stripe.balance.retrieve((err, balance) => {
//   console.log(balance);
// });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);
module.exports = app;
