import { Kayttaja, validateKayttaja } from '../Models/kayttaja.js';
import { Tuote } from '../Models/tuote.js';
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

    const token = jwt.sign({ kayttajaId: newKayttaja._id, nimi, sahkoposti }, process.env.JWT_SECRET || 'SecretKey');
    // Store the token in the cookie
    res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true })

    res.json({ message: 'User Registered Successfully!', newKayttaja });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
}; //Rekisteroidy loppu

// Kirjaudu sisään
export const kirjaudu = async (req, res) => {
  const { sahkoposti, salasana } = req.body;
  console.log(sahkoposti, salasana)
  try {
  
    const kayttaja = await Kayttaja.findOne({ sahkoposti });
    // console.log('kayttaja: ', kayttaja)

    if (!kayttaja) {
      return res.json({ status: 401, message: 'Väärä sähköposti tai salasana.' });
    }

    const validPass = await bcrypt.compare(salasana, kayttaja.salasana);
    // console.log('validPass: ', validPass)
    // if (!kayttaja || !validPass) {
    //   return res.status(401).json({ message: 'Väärä sähköposti tai salasana.' });
    // }

    if (!validPass) {
      return res.json({ status: 401, message: 'Väärä sähköposti tai salasana.'});
    }
    const token = jwt.sign({ kayttajaId: kayttaja._id }, process.env.JWT_SECRET || 'SecretKey', {
      expiresIn: "9d"
    });


    res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true });

    res.json({ code: 'Success', message: `Tervetuloa ${kayttaja.nimi}`, token })

  } catch (error) {
    // console.error('Login error:', error);
    res.status(500);
  }

};//kirjaudu loppu




export const portfolio = async (req, res) => {
  // console.log(req.user)
  res.json({ user: req.user })
}

