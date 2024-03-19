import { Router } from "express";
import { postItem} from "../controllers/item";

const router = Router();

router.post("/", postItem)

export { router}
