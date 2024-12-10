import express from "express";
import {authorizeUser} from '../middleware/authorization.js'

import {TeeTuote, KaikkiTuote, LoydaTuoteId, TuoteKayttajatID, poista} from "../controllers/tuoteC.js"

const route = express.Router();


route.post('/teeTuote',authorizeUser,TeeTuote)
// route.get('/TuoteKayttajatID', authorizeUser, TuoteKayttajatID);
route.get('/portfolio/:id',TuoteKayttajatID);
route.get('/', KaikkiTuote)
route.get('/:id', LoydaTuoteId)
route.delete('/poista/:id', poista)






export default route;