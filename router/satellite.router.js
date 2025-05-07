import express from 'express';
import { delatesatellite, getSatellite, postsatellite, updatesatellite } from '../controller/satellite.controller.js';
const satelliteRouter =express.Router();
satelliteRouter.get("/getsatellite",getSatellite)
satelliteRouter.post("/postsatellite",postsatellite)
satelliteRouter.put("/updatesatellite/:id",updatesatellite);
satelliteRouter.delete("/deletesatellite/:id",delatesatellite);
export {satelliteRouter};