import express from "express";


import {Rekisteroidy, kirjaudu, portfolio} from '../controllers/kayttajaC.js'
import {authorizeUser} from '../middleware/authorization.js'

const route = express.Router();

//Tunnuksent tekeminen 
route.post('/Rekisteroidy', Rekisteroidy)

// kirjautuminen sisään 
route.post('/kirjaudu',kirjaudu)
  
// käyttäjä portfolio
route.get('/portfolio',authorizeUser,portfolio)

export default route;