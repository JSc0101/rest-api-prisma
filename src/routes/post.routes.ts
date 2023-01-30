import { Router } from "express";
import { getPost } from "../controllers/posts/get.controllers";
import {savePost} from '../controllers/posts/post.controllers'
const postRouter = Router();

postRouter.get("/post", getPost);
postRouter.post("/post", savePost);

export { postRouter };
