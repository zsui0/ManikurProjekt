const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  appointmentType: {
    type: String,
    required: true  
  },
  beginDate: {
    type: Date,
    required: true 
  },
  endDate: {
    type: Date,
    required: true 
  },
})

module.exports = mongoose.model('Booking', bookingSchema)