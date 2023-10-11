import express from "express";
// create application and link to express after installing express
const app = express();
// method to listen to port 3000 and in the callback function say server is running on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
