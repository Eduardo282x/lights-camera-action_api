import { Router } from "express";
import { methods as moviesController } from "../controllers/movies.controller";

const router=Router();

router.get('/', moviesController.getMovies);
router.put('/mark', moviesController.markMovies);

export default router;