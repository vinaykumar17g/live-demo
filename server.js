import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { dbConnect } from './config/db.js';
import { satelliteRouter } from './router/satellite.router.js';
import bodyParser from 'body-parser';
import { angleRouter } from './router/angle.router.js';
import { gainRouter } from './router/gain.router.js';
import { lossRouter } from './router/loss.router.js';
import { cnratioRouter } from './router/cnratio.router.js';
const app =express();

const port=process.env.PORT;
let jsonParser= bodyParser.json();
app.use(jsonParser);
app.use(cors())
app.use("/satellite",satelliteRouter);
app.use("/angle",angleRouter);
app.use("/gain",gainRouter);
app.use("/loss",lossRouter);
app.use("/cnratio",cnratioRouter);
app.get("/",(req,res)=>
{
    res.send("check satellite on port 5001/satellite/getsatellite");
})
app.listen(port,()=>
{
    console.log(`server run on port ${port}`)
})
dbConnect();
