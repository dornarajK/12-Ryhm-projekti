import express from "express";
import {authorizeUser} from '../middleware/authorization.js'

import {TeeTuote, KaikkiTuote, LoydaTuoteId, TuoteKayttajatID} from "../controllers/tuoteC.js"

const route = express.Router();


route.post('/teeTuote',TeeTuote)
route.get('/', KaikkiTuote)
route.get('/:id', LoydaTuoteId)
route.get('/TuoteKayttajatID/:id', TuoteKayttajatID)


export default route;