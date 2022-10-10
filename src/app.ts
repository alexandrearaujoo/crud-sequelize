import "express-async-errors";

import express from "express";
import errorHandling from "./middlewares/error.middleware";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(errorHandling);

export default app;
