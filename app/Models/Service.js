const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ServiceSchema = new Schema({
  name_ar: {
    type: String,
    required: true,
    trim: true
  },
  
  name_en: {
    type: String,
    required: true,
    trim: true
  },
  
  value_ar: {
    type: String,
    required: true,
    trim: true
  },
  
  value_en: {
    type: String,
    required: true,
    trim: true
  },
  
});
module.exports = mongoose.model('Service', ServiceSchema);