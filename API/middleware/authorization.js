import { Kayttaja } from "../Models/kayttaja.js";
import { Rekisteroidy} from "../controllers/kayttajaC.js";

import jwt from "jsonwebtoken";


export const authorizeUser = async (req, res, next) => {
  const authCookie = req.headers.authorization;
  // console.log(authCookie);
  
  // const authCookie = req.cookies['authcookie'];
  // console.log(authCookie);
  
  if (!authCookie) {
    // console.log("Authcookie puuttuu.");
    return res.status(401).json({ message: "Kirjaudu ensin sisään." });
  }


  try {
    
    const decoded = jwt.verify(authCookie.split(' ')[1], "SecretKey");
    // console.log("Token decoded:", decoded);
    
    const user = await Kayttaja.findById(decoded.kayttajaId);
    if (!user) {
      // console.log("Käyttäjää ei löytynyt ID:llä", decoded.kayttajaId);
      return res.status(404).json({ message: "Käyttäjää ei löytynyt." });
    }

    req.user = user; // Set user object
    // console.log("Käyttäjä middleware läpi:", user);
    next();
  } catch (error) {
    console.error("Virhe tunnistuksessa:", error.message);
    return res.status(401).json({ message: "Virheellinen tai vanhentunut tunnus." });
  }

  // console.log(userData);
  // localStorage.setItem('user', JSON.stringify(userData));

};
