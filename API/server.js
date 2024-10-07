import express from 'express';
import mongoose from 'mongoose';
import Kayttajaroute from './routes/kayttajaR.js';

//* yhdistämine mongoose 
mongoose.connect("mongodb+srv://devrajkharal05:Fa0wHVoABeO7AUYV@cluster0.zhoea.mongodb.net/", {
  dbName: "ReMarket"
}).then(() =>console.log("Mangodb on Yhdistetty...!"))
.catch((err) => console.log(err.message))


const app = express();
const port = 3000;
const host = 'localhost';
app.use(express.json());

app.use('/api', Kayttajaroute);



app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));


