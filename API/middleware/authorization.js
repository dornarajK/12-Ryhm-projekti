import { Kayttaja } from "../Models/kayttaja.js";
import jwt from 'jsonwebtoken';

// Authorization middleware
export const authorizeUser = async (req, res, next) => {
  const token = req.header("Authorization")?.replace('Bearer ', '');
  console.log('login');
  try {
    if (!token) return res.status(401).json({ message: 'Kirjaudu ensin sisään.' });

    const decode = jwt.verify(token, process.env.JWT_SECRET || "SecretKey");

    const id = decode.kayttajaId;

    let user = await Kayttaja.findById(id);
    if (!user) return res.status(404).json({ message: "Käyttäjää ei ole olemassa." });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Virheellinen tai vanhentunut tunnus.' });
  }

  // console.log(userData);
  // localStorage.setItem('user', JSON.stringify(userData));

};

