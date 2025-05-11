import express from 'express';
import { delatesatellite, getSatellite, getsatellitebyid, getsatellitebyname, postsatellite, updatesatellite } from '../controller/satellite.controller.js';
const satelliteRouter =express.Router();
satelliteRouter.get("/getsatellite",getSatellite)
satelliteRouter.post("/postsatellite",postsatellite)
satelliteRouter.put("/updatesatellite/:id",updatesatellite);    
satelliteRouter.delete("/deletesatellite/:id",delatesatellite);
satelliteRouter.get("/getsatellitebyid/:id",getsatellitebyid);
satelliteRouter.get("/getsatellitebyname/:name",getsatellitebyname);
export {satelliteRouter};