const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String
  },
  body: {
    type: String
  },
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', Schema)