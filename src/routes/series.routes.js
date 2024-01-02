import { Router } from "express";
import { methods as seriesController } from "../controllers/series.controller";

const router=Router();

router.get('/', seriesController.getSeries);
router.put('/mark', seriesController.markSeries);

export default router;