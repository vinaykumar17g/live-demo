import express from "express";
import { symbolRate } from "../controller/loss.controller.js";

let lossRouter = express.Router();
lossRouter.post("/symbolrate", symbolRate);
export { lossRouter };
