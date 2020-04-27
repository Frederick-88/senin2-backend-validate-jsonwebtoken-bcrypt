const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Bcrypt = require("bcrypt");
const saltRounds = 12; //karakter untuk acak password di depan dan dibelekang yang bagian tengah password user saat diinput

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", function (next) {
  this.password = Bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = mongoose.model("User", userSchema);
