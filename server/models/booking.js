const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true  
  },
  start: {
    type: Date,
    required: true 
  },
  end: {
    type: Date,
    required: true 
  },
  length: {
    type: Date,
    required: false
  }
})

module.exports = mongoose.model('Booking', bookingSchema)