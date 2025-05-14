import express from 'express';
import 'dotenv/config'
import { dbConnect } from './config/db.js';
import { satelliteRouter } from './router/satellite.router.js';
import bodyParser from 'body-parser';

const app =express();

const port=process.env.PORT;
let jsonParser= bodyParser.json();
app.use(jsonParser);
app.use("/satellite",satelliteRouter);

app.get("/",(req,res)=>
{
    res.send("check satellite on port 50001/satellite/getsatellite");
})

app.listen(port,()=>
{
    console.log(`server run on port ${port}`)
})
dbConnect();