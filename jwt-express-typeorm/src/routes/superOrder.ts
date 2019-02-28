import { Router } from "express";
import SuperOrderController from "../controllers/SuperOrderController";

const router = Router();
//Login route
router.get("/all", SuperOrderController.getAll);

export default router;