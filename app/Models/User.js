var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  

});

module.exports = mongoose.model('blog', blogSchema);