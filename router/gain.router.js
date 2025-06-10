import express from 'express';
import { gainCalculator } from '../controller/gain.calculator.js';
let gainRouter= express.Router();
gainRouter.post("/gaincalculator",gainCalculator)
export {gainRouter};