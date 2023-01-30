import { Router } from "express";
import { getUser } from "../controllers/manager/get.controllers";
import { createUser } from "../controllers/manager/post.controllers";
const router = Router();
router.get("/", getUser);
router.post("/", createUser);

export { router };
