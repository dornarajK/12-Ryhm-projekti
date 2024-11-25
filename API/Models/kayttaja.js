import mongoose from "mongoose"; 
import Joi from 'joi';

const KayttajaSchema = new mongoose.Schema({
  nimi: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  sahkoposti: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  salasana: {
    type: String,
    required: true,
    min: 7,
    max: 100,
  }
});

// Validaatiofunktio käyttäjän tiedoille
export function validateKayttaja(kay) {
  const schema = Joi.object({
    nimi: Joi.string().min(3).max(100).required(),
    sahkoposti: Joi.string().min(5).max(255).required().email(),
    salasana: Joi.string().min(7).max(100).required()
  });
  return schema.validate(kay);
}

// Mallin vienti
export const Kayttaja = mongoose.model("Kayttaja", KayttajaSchema);

