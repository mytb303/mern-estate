import User from "../models/user.model.js"; //created by clicking User in const newUser line 7
import bcryptjs from "bcryptjs";

// change func to use async when using <await> below
//get info from the browser which comnes from the body - BODY REQUEST (req.body)
//hash password
//config using the user.model.js
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  // save in db - await prevents errors if connection takes time.
  // process remains on this line until save is complete
  try {
    await newUser.save();
    //response message from server. catch and show user error message.
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
