import express, { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// post request to enable a sign-up /signup,
// then create a 'signup' func inside a controller- auth.controller.js and import it insiode the push
router.post("/signup", signup);

//export as dfault then inside index.js, import at the top
export default router;
