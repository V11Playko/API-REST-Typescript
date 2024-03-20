import { Router } from "express";
import {registerCtrl, loginCtrl} from "../controllers/auth.controller"

const router = Router();

router.post("/register", registerCtrl);



export { router }