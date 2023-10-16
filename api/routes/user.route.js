import express, { Router } from "express";
import { test } from "../controllers/user.controller.js";
// use express to create the route
const router = express.Router(); // note uppercase R

router.get("/test", test);

// export as a default for use elsewhere e.g., inside index.js where define an import
export default router;
