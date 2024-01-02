import { Router } from "express";
import { methods as allController } from "../controllers/all.controller";

const router=Router();

router.get('/', allController.getAll)

export default router;