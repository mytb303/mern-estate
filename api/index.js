import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//initialise dotenv
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB: cluster mern-estate");
  })
  .catch((err) => {
    console.log(err);
  });

// create application and link to express after installing express
const app = express();

// method to listen to port 3000 and in the callback function say server is running on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
