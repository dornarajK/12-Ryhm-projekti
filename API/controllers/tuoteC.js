import { Tuote } from '../Models/tuote.js';

//* tueten tekemien 
export const TeeTuote = async (req, res) => {
  const { tuoteNimi, hinta, tiedot, kuva } = req.body;

  try {
    const tuote = await Tuote.create(
      {
        tuoteNimi,
        hinta,
        tiedot,
        kuva,
        kayttaja: req.kayttaja
      });

    res.json({ message: 'Tuote tekemine onnistuu', tuote });
  }
  catch (err) {
    res.status(500).json({ message: 'Server Error: tuoten tekemisessä', error: err });
  }
}


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
export const LoydaTuoteId = async (req, res) => {
  const id = req.params.id;
  try {
    const tuote = await Tuote.findById(id)

    if (!tuote) {
      res.json({ message: 'Tuote ei löytynyt', });
    }
    res.json(tuote)
  }
  catch (err) {
    res.status(500).json({ message: 'Server Error: Tuote löytämisessä id avulla', error: err })
  }
}

// get löydä tuote käyttäjä id avulla

export const TuoteKayttajatID = async (req, res) => {
  const kayttajaId = req.params.id;
  try {
    const tuote = await Tuote.find({ kayttaja: kayttajaId });
    if (!tuote) {
      res.json({ message: 'Tuote ei löytynyt käyttäjä id avulla', });
    }
    res.json(tuote);
  }
  catch (err) {
    return res.status(500).json({ message: 'Server Error: Tuote löytämisessä käyttäjä id avulla', error: err });
  }
}