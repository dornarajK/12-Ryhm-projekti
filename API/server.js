import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';


import cookieParser from 'cookie-parser';

import Kayttajaroute from './routes/kayttajaR.js';
import Tuoteroute from './routes/tuoteR.js';
import { connectDB,closeDB } from './Models/dbYhdistys.js';


import { fileURLToPath } from 'url';

const app = express();


const port = 3000;
const host = 'localhost';

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());
app.use(express.json());


app.use(cors({
  origin: true,  // Sallii kaikki alkuperät
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true  // Sallii evästeet
}));


app.use('/api', Kayttajaroute);
app.use('/api', Tuoteroute)




// Määrittele __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


connectDB().then(()=>{

  app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));

}).catch((err)=>{
  console.log("Failed to connect to MongoDB:", err.message)
})




// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Server is shutting down...');
  await closeDB(); 
  process.exit(0);  
});

process.on('SIGTERM', async () => {
  console.log('Server is shutting down...');
  await closeDB(); 
  process.exit(0); 
});