const User = require("../models/User");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "evos";

module.exports = {
  // create: function (req, res, next) {
  //   User.create({
  //     email: req.body.email,
  //     password: req.body.password,
  //   })
  //     .then((res) => res.json(res))
  //     .catch((err) => {
  //       console.log(err);
  //       // res.json(err) ; boleh pakai yang ini juga untuk mengecek error atau throw (err).
  //     });
  // },
  createData: (req,res)=>{
    User.create({
      email: req.body.email,
      password: req.body.password
    }).then(result =>{
      res.json(result)
    })
  },
  
  getData: function (req,res,next){
    User.find({})
    .then((response) =>{
        res.json({ message:"Successfully Get Data.", data:response})
    })
    .catch(err => {
        console.log(err);
        
    })
},

getDataById: function (req,res,next){

    User.findById(req.params.userId)
    .then((response) =>{
        res.json({ message:"Successfully Get Data by ID.", data:response})
    })
    .catch(err => {
        console.log(err);
        
    })
},

deleteById: function (req,res,next){

    User.findByIdAndRemove(req.params.userId)
    .then((result) =>{
        res.json({ message:"Successfully Remove Data by ID."})
    })
    .catch(err => {
        console.log(err);
        
    })
},

authenticated: function (req, res, next) {
  User.findOne({ email: req.body.email })
    .then((response, err) => {
      if (err) next(err);
      else {
        if (
          response != null &&
          Bcrypt.compareSync(req.body.password, response.password)
        ) {
          jwt.sign(
            {
              id: response._id,
            },
            privateKey,
            { expiresIn: "2 Days" },
            (err, token) => {
              res.json(token);
            }
          );
        } else {
          res.json({ status: err });
        }
      }
    })
    .catch((err) => {
      throw err;
    });
},
};
