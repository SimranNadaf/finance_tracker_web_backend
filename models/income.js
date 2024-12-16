const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
//  id : String,
  source: String,
  date: Date,
  amount : Number,
});

const income = mongoose.model('Income', incomeSchema);

module.exports = income;