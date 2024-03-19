import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/car.controller";

const router = Router();

router.get("/:id", getItem)
router.get("/", getItems)
router.post("/", postItem)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)

export { router}
