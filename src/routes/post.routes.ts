import { Router } from "express";
import { getPost } from "../controllers/posts/get.controllers";
const postRouter = Router();

postRouter.get("/post", getPost);

export { postRouter };
