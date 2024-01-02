import express from "express";
import morgan from "morgan";
import cors from "cors";
import seriesRouter from "./routes/series.routes";
import allRouter from "./routes/all.routes";
import animeRouter from "./routes/anime.routes";
import moviesRouter from "./routes/movies.routes";

const app = express();

// Settings
app.set("port", 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/all',allRouter);
app.use('/api/series',seriesRouter);
app.use('/api/anime',animeRouter);
app.use('/api/movies',moviesRouter);

export default app;