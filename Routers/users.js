import express from "express";
import { registerUser } from "../controllers/userController.js";


// Router init
const router = express.Router()

router.post("/user",registerUser)

// export default
export default router