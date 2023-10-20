import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import user router from user.route.js using meaningful name
// the connected export <export default router> is defined in the user.route.js file
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

//initialise dotenv
dotenv.config();

mongoose
  // connect to MongoDB cluster using credentials contained in the .env MONGO var
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB: cluster mern-estate");
  })
  .catch((err) => {
    console.log(err);
  });

// create application and link to express after installing express
const app = express();

// allow json as input for server - testing signup POST from Insomnia
// note req.body defined in auth.comnroller.js
app.use(express.json());

// method to listen to port 3000 and in the callback function say server is running on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// ***** cretae API Routes *****

// userRouter is defined in <import useerRouter> above where it addresses the user.route.js file address
// userRouter is a meaningful name for addressing the route function for a user defined in user.route.js
app.use("/api/user", userRouter);
//ditto authRouter
app.use("/api/auth", authRouter);
