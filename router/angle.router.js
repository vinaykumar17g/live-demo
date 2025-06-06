import express from 'express';
import {calculateLookUpAngle } from '../controller/angle.controller.js';

let angleRouter =express.Router();
angleRouter.post("/calculatelookupangle",calculateLookUpAngle);
export {angleRouter};