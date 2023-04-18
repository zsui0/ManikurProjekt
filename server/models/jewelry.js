const mongoose = require('mongoose')

const jewelrySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true  
  },
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Jewelry', jewelrySchema)