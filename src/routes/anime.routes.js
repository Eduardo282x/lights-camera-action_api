import { Router } from "express";
import { methods as animeController } from "../controllers/anime.controller";

const router=Router();

router.get('/', animeController.getAnimes);
router.put('/mark', animeController.markAnime);


export default router;