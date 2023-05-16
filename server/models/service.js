const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true  
  },
  length: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Service', serviceSchema)