import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import userRouter from './Routes/userRoutes.js';


//Get .env file

dotenv.config();


//App Config

const app = express();




//Database 

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });




//Middleware

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));




//API Endpoints

app.use('/api/users', userRouter);





//Listener


const port = process.env.PORT || 5000;

app.listen(port, () => {

    console.log(`Connected on ${port}`);
    
});