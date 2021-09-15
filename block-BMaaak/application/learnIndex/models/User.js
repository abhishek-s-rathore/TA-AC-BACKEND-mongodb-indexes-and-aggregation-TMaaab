var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
      pin: { type: String },
    },
  },
  { timestamps: true }
);

userSchema.index({ username: 1 }, { unique: true });
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ country: 1, state: 1 });

module.exports = mongoose.model('User', userSchema);
