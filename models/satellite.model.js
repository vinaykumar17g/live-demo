import mongoose from "mongoose";

const satelliteSchema= mongoose.Schema({
    satname:{type:String,required:true},
    satlatitude:{type:String,required:true},
    satlongitude:{type:String,required:true},
    sataltitude:{type:String,required:true},
},
{
    timestamps:true,
}
);

export const satelliteModel =mongoose.model("Satellite",satelliteSchema);