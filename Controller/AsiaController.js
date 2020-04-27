const Asia = require ("../models/Asia")
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const privateKey2 = "asia";

module.exports = {

  createData: (req,res)=>{
    Asia.create({
      countryName: req.body.countryName,
      password: req.body.password
    }).then(result =>{
      res.json(result)
    })
  },
  
  getData: function (req,res,next){
    Asia.find({})
    .then((response) =>{
        res.json({ message:"Successfully Get Data.", data:response})
    })
    .catch(err => {
        console.log(err);
        
    })
},

getDataById: function (req,res,next){

    Asia.findById(req.params.asiaId)
    .then((response) =>{
        res.json({ message:"Successfully Get Data by ID.", data:response})
    })
    .catch(err => {
        console.log(err);
        
    })
},

deleteById: function (req,res,next){

    Asia.findByIdAndRemove(req.params.asiaId)
    .then((result) =>{
        res.json({ message:"Successfully Remove Data by ID."})
    })
    .catch(err => {
        console.log(err);
        
    })
},

// authenticated: function (req, res, next) {
//   User.findOne({ countryName: req.body.countryName })
//     .then((response, err) => {
//       if (err) next(err);
//       else {
//         if (
//           response != null &&
//           Bcrypt.compareSync(req.body.password, response.password)
//         ) {
//           jwt.sign(
//             {
//               id: response._id,
//             },
//             privateKey2,
//             { expiresIn: "2 Days" },
//             (err, token) => {
//               res.json(token);
//             }
//           );
//         } else {
//           res.json({ status: err });
//         }
//       }
//     })
//     .catch((err) => {
//       throw err;
//     });
// },

};
