import { Router} from "express"
import { getOrders } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

router.get('/', checkJwt, getOrders)

export { router }