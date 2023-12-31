import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // timestamps for MongoDB to log user creation and updates
  { timestamps: true }
);
// create the model
const User = mongoose.model("User", userSchema);

export default User; // to use this model anywhere in the application
