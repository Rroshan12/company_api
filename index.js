import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import companyRoute from './routes/companyRoute.js';
import categoryRoute from './routes/categoryRoute.js'



const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/api', (req,res) =>{
    res.send("This site generate company api got to https://local5000/api/company");
  });

app.use('/api/company', companyRoute);
app.use('/api/category', categoryRoute);



const CONNECTION_URL = 'mongodb+srv://Jshero:Jshero123@cluster0.x4qnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
