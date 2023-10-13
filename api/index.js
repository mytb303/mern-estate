import express from "express";
<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv";
//initialise dotenv
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// create application and link to express after installing express
const app = express();

=======
// create application and link to express after installing express
const app = express();
>>>>>>> 805fc615008efec96adcb42d73eb3d1e73e73c1c
// method to listen to port 3000 and in the callback function say server is running on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
