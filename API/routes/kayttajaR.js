import express from "express";


import {Rekisteroidy} from '../controllers/kayttajaC.js'


const route = express.Router();

//Tunnuksent tekeminen 
route.post('/Rekisteroidy', Rekisteroidy)

// kirjautuminen sisään 
// route.get('/kirjaudu', kirjaudu)


export default route;