const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
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

module.exports = mongoose.model('Appointment', appointmentSchema)