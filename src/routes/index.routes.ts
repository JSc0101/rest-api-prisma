import { Router } from "express";
import { getUser } from "../controllers/get.controllers";
const router = Router();
router.get("/", getUser);

export { router };
