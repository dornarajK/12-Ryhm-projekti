import { Kayttaja, validateKayttaja } from '../Models/kayttaja.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Rekisteröidy
export const Rekisteroidy = async (req, res) => {
  const { nimi, sahkoposti, salasana } = req.body;

  // Validointi tarkistus 
  const { error } = validateKayttaja(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let kayttaja = await Kayttaja.findOne({ sahkoposti });
  if (kayttaja) {
    return res.status(400).send('Käyttäjä on jo olemassa. Kirjaudu sisään.');
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(salasana, salt);

    const newKayttaja = await Kayttaja.create({ nimi, sahkoposti, salasana: hashPass });

    res.json({ message: 'User Registered Successfully!', newKayttaja });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
}; //Rekisteroidy loppu

// Kirjaudu sisään
export const kirjaudu = async (req, res) => {
  const { sahkoposti, salasana } = req.body;

  try {
    const kayttaja = await Kayttaja.findOne({ sahkoposti });

  console.log("gsfsd",kayttaja);
    if (!kayttaja) {
      return res.status(400).send('Väärä sähköposti tai salasana.');
    }
    const validPass = await bcrypt.compare(salasana, kayttaja.salasana);
    if (!validPass) {
      return res.status(401).json({ message: 'salasana Virhe' });
    }
    const token = jwt.sign({ kayttajaId: kayttaja._id }, process.env.JWT_SECRET || 'SecretKey', {
      expiresIn: "9d"
    });
    
    res.json({code:'Success', nimi:kayttaja.nimi, message: `Tervetuloa ${kayttaja.nimi}`, token })

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }

};//kirjaudu loppu


//käyttäjä portfolio
export const portfolio = async (req, res) => {
  res.json({ kayttaja:  req.kayttaja});
}//portfolio loppu