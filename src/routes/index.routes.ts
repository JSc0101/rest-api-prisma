import { Router } from "express";
import { getUser } from "../controllers/get.controllers";
import { createUser } from "../controllers/post.controllers";
const router = Router();
router.get("/", getUser);
router.post("/", createUser);

export { router };
