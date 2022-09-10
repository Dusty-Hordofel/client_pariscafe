const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: 25,
    },
    addedBy: {
      type: String,
      required: true,
    },
    __v: {
      type: Number,
      select: false, //select:false means that this field will not be returned in the response
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Category', categorySchema);
