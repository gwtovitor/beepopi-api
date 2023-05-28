import mongoose from 'mongoose';

const TicketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  titulo: {
    type: String
  },
  problema: {
    type: String
  },
  midia: {
    type: String,
    deafult: ''
  }
  createdAt: {
    type: Date,
    deafult: Date.now()
  }
})

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;