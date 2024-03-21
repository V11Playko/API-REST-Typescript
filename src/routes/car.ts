import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/car.controller";
import { logMiddleware } from "../middleware/log.middleware";
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

router.get("/:id", checkJwt, logMiddleware, getItem)
router.get("/", checkJwt, getItems)
router.post("/", checkJwt, postItem)
router.put("/:id", checkJwt, updateItem)
router.delete("/:id", checkJwt, deleteItem)

export { router}
