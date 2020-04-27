const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Bcrypt = require("bcrypt");
const saltRounds = 6; //karakter untuk acak password di depan dan dibelekang yang bagian tengah password user saat diinput

const asiaSchema = new Schema({
  countryName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
asiaSchema.pre("save", function (next) {
  this.password = Bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = mongoose.model("Asia", asiaSchema);
