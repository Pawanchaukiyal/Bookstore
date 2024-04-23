import express from "express"
const router = express.Router();
import { signup } from "../controller/user.controller.js";
import { login } from "../controller/user.controller.js";
// Routes for user CRUD operations
router.post('/signup',signup);
router.post('/login',login);

export default router;
