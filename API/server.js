import express from 'express';
// import mongoose from 'mongoose';
import Kayttajaroute from './routes/kayttajaR.js';
import Tuoteroute from './routes/tuoteR.js';
import { connectDB } from './Models/dbYhdistys.js';


const app = express();
const port = 3000;
const host = 'localhost';
app.use(express.json());


app.use('/api', Kayttajaroute);
app.use('/api', Tuoteroute)


connectDB().then(()=>{

  app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));

}).catch((err)=>{
  console.log("Failed to connect to MongoDB:", err.message)
})


