const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
//  id : String,
  title: String,
  date: Date,
  amount : Number,
});

const expense = mongoose.model('Expense', expenseSchema);

module.exports = expense;