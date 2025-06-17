import express from 'express';
import { cnratio } from '../controller/cnratio.controller.js';
let cnratioRouter =express.Router();
cnratioRouter.post("/cnratio-calculator",cnratio);
export {cnratioRouter};