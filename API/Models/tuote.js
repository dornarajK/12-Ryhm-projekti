import mongoose from 'mongoose'

const tuoteSchema = new mongoose.Schema({
  tuoteNimi: {
    type: String,
    required: true,
  },
  hinta: {
    type: Number,
    required: true,
  },
  tiedot: {
    type: String,
    required: true, 
  },
  kuva: {
    type: String,
    required: true,
  },
  kayttaja: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kayttaja"
  }
})



export const Tuote = mongoose.model('Tuote', tuoteSchema);