import { Router } from "express";
import { getUser } from "../controllers/index.controllers";
const router = Router();
router.get("/", getUser);

export default router;
