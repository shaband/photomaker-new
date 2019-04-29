const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let SetttingSchema = new Schema({
  name: {
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
  type: {
    type: String,
    default: 'text',
    trim: true,
    enum: ['text', 'number', 'email', 'file', 'textarea', 'date', 'time']
  },
});

SetttingSchema.methods.value = function(local = 'ar')
  {
  if (local = ar) {
    return this.value_ar;
  }
  return this.value_en;
}

module.exports = mongoose.model('Setting', SetttingSchema);