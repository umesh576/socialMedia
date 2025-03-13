// import { Router } from "express";
import express from "express";
import { RegisterUser } from "../controller/user.crontroller";

const router = express.Router();

router.post("/signup", RegisterUser);

export default router;
