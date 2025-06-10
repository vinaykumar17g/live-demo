import express from "express";
import { fspl, symbolRate } from "../controller/loss.controller.js";

let lossRouter = express.Router();
lossRouter.post("/symbolrate", symbolRate);
lossRouter.post("/fspl",fspl);
export { lossRouter };
