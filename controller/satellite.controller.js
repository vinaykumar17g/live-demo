import { satelliteModel } from "../models/satellite.model.js"
import { response } from "../utils/response.js";

export const getSatellite =async(req,res)=>
{
    const satelliteData =await satelliteModel.find();
    res.send(satelliteData);
}

export const getsatellitebyid=async (req, res)=>
{
    let satid = req.params.id;
    let satelliteData = await satelliteModel.findById(satid);
    res.send(satelliteData);
}

export const getsatellitebyname =async (req,res) =>
{
    let satname =req.params.name;
    let satelliteData =await satelliteModel.findOne({satname});
    res.send(satelliteData);
}

export const postsatellite = async (req,res)=>
{
    let {satname,satlongitude,satlatitude,sataltitude}=req.body;
    const newSatellite =new satelliteModel({satname,sataltitude,satlatitude,satlongitude});
    const satelliteData= await newSatellite.save();
    res.send(satelliteData);
}

export const updatesatellite = async (req,res)=>
{
    let satid=req.params.id;
    let {satname,satlongitude,satlatitude,sataltitude}=req.body;
    await satelliteModel.updateOne({_id:satid},{$set:{satname:satname,sataltitude:sataltitude,satlongitude:satlongitude,satlatitude:satlatitude}});
    let satelliteData = await satelliteModel.findById(satid)
    res.send(satelliteData);
}
export const delatesatellite = async (req,res)=>
{
    let satid=req.params.id;
    let satelliteData = await satelliteModel.findById(satid)
    await satelliteModel.deleteOne({_id:satid})
    res.send(satelliteData);
}

