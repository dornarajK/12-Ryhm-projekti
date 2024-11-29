import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';


import cookieParser from 'cookie-parser';

import Kayttajaroute from './routes/kayttajaR.js';
import Tuoteroute from './routes/tuoteR.js';
import { connectDB } from './Models/dbYhdistys.js';

const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors({
  origin: true,  // Sallii kaikki alkuperät
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true  // Sallii evästeet
}));


app.use(cookieParser());
app.use(express.json());

app.use('/api', Kayttajaroute);
app.use('/api', Tuoteroute)


connectDB().then(()=>{

  app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));

}).catch((err)=>{
  console.log("Failed to connect to MongoDB:", err.message)
})


