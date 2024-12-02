import { Tuote } from '../Models/tuote.js';


//* tueten tekemien 
export const TeeTuote = async (req, res) => {
  if (!req.user) { // req.kayttaja -> req.user
    return res.status(401).json({ message: "Käyttäjää ei tunnistettu. Kirjaudu ensin sisään." });
  }

  const { tuoteNimi, hinta, tiedot, kuva } = req.body;

  try {
    const tuote = await Tuote.create({
      tuoteNimi,
      hinta,
      tiedot,
      kuva,
      kayttaja: req.user._id, 
    });
    // console.log("Tuote tallennetaan:", { tuoteNimi, hinta, tiedot, kuva, kayttaja: req.user._id });
    res.json({ message: "Tuote luotu onnistuneesti", tuote });
  } catch (error) {
    res.status(500).json({ message: "Virhe tuotteen luonnissa", error });
  }
};



// get kaikki tuote 
export const KaikkiTuote = async (req, res) => {
  try {
    const tuote = await Tuote.find();
    res.json(tuote)
  } catch (err) {
    res.status(500).json({ message: 'Server Error: kaikki tuote saamisessa', error: err })
  }
}

// get löydä tuote id avulla
// export const LoydaTuoteId = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const tuote = await Tuote.findById(id)

//     if (!tuote) {
//       res.json({ message: 'Tuote ei löytynyt', });
//     }
//     res.json(tuote)
//   }
//   catch (err) {
//     res.status(500).json({ message: 'Server Error: Tuote löytämisessä id avulla', error: err })
//   }
// }
export const LoydaTuoteId = async (req, res) => {
  const id = req.params.id;
  try {
    const tuote = await Tuote.findById(id).populate('kayttaja', 'sahkoposti');

    if (!tuote) {
      return res.json({ message: 'Tuote ei löytynyt' });
    }
    res.json(tuote);
  } catch (err) {
    res.status(500).json({ message: 'Server Error: Tuote löytämisessä id avulla', error: err });
  }
};


// get löydä tuote käyttäjä id avulla

export const TuoteKayttajatID = async (req, res) => {
  try {
    const tuote = await Tuote.find({ kayttaja: req.user._id });
    if (!tuote || tuote.length === 0) {
      return res.status(404).json({ message: 'Käyttäjältä ei löytynyt tuotteita.' });
    }
    res.json(tuote);
  } catch (err) {
    res.status(500).json({ message: 'Virhe käyttäjän tuotteiden hakemisessa', error: err });
  }
};


