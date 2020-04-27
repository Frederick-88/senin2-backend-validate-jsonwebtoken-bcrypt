var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jsonWebToken = require("jsonwebtoken");
const privateKey = "evos";


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/UsersRouter");
const HeroesRouter = require("./routes/HeroesRouter");
const AsiaRouter = require("./routes/AsiaRouter");

var app = express();
mongodConnect = process.env.DB_LOCAL;
mongoose.connect(mongodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/heroes",validateUser, HeroesRouter);
app.use("/asia",validateUser, AsiaRouter);

function validateUser (req,res,next){
  jsonWebToken.verify(req.headers['x-access-token'], privateKey, (err,decoded)=>{
    if (err){
      res.json(err)
    } else {
      req.body.userId = decoded.id;
      next();
    }
  })
}

module.exports = app;
