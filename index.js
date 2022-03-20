const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// file
const departmentRoute = require("./src/Routes/DepartmentRoute");

require("dotenv").config();
const port = process.env.PORT || 5001;

// file call
const app = express();

// middle wares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6mulb.mongodb.net/hospital?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Mongodb connected....");
  })
  .catch((err) => console.log(err.message));

// cors erorr
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers : Origin, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // res.headers.append("Access-Control-Allow-Origin", "http://localhost:3002");
  // headers.append("Access-Control-Allow-Credentials", "true");
  next();
});

// routing
app.use("/departments", departmentRoute);
// first route
app.get("/", (req, res) => {
  res.send("This is Medicare server");
});
// Undefined Route Implement
app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: 404, error: true, message: "Not Found this route" });
});

//   test
app.listen(port, () => {
  console.log("sucessfully run by", port);
  ``;
});
