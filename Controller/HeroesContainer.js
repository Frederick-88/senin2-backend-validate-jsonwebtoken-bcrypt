const Heroes = require("../models/Heroes");

module.exports = {
  // cara paling awal
  // create: (req, res, next)=>{
  //     Heroes.create(
  //         {
  //         name: req.body.name,
  //         born: req.body.born,
  //         dead: req.body.dead,
  //         description: req.body.description,
  //         establishment: req.body.establishment,
  //     },
  //     (err, result)=> {
  //         if (err) next(err);
  //         else{
  //             res.json({status:"success", data:result});
  //         }
  //     }
  //     )
  // },

  createData: (req, res) => {
    Heroes.create({
      image: req.body.image,
      name: req.body.name,
      born: req.body.born,
      dead: req.body.dead,
      description: req.body.description,
      establishment: req.body.establishment,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  //contoh 1
  getData: (req, res) => {
    Heroes.find({})
      .then((result) => {
        res.json({ status: "success", data: result });
      })
      .catch((err) => err);
  },
  getDatabyId: (req, res) => {
    //cara 1
    Heroes.findById(req.params.heroesId)
      .then((result) => res.json(result))
      .catch((err) => resjson(err));
    // cara 2
    // Heroes.findById({}, req.params.heroesId).then(result => res.json(result)).catch(err => resjson(err))
  },
  deleteById: (req, res) => {
    Heroes.findByIdAndRemove(req.params.heroesId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  editById: (req, res) => {
    Heroes.findByIdAndUpdate(req.params.heroesId, {
      image: req.body.image,
      name: req.body.name,
      born: req.body.born,
      dead: req.body.dead,
      description: req.body.description,
      establishment: req.body.establishment,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};

// //contoh 2
// getAllData: ( res, next)=>{
//     Heroes.find({},
//         (err, result)=>{
//             if (err) next(err);
//             else{
//                 res.json({status:"success", data: result})
//             }
//         })
// }
// }
