import express from 'express';
import 'dotenv/config'
import { dbConnect } from './config/db.js';
import { satelliteRouter } from './router/satellite.router.js';
import bodyParser from 'body-parser';
const app =express();

const port=5001;
let jsonParser= bodyParser.json();
app.use(jsonParser);
app.use("/satellite",satelliteRouter);
app.get("/",(req,res)=>
{
    res.send("hello")
})

app.listen(port,()=>
{
    console.log(`server run on port ${port}`)
})
dbConnect();