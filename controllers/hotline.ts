import { Request,Response } from "express";
import { AppError } from "../errors/AppErrors.js";
import { Hotline } from "../db/entities/Hotline.js";
const getHotlineBYID =async(id:string)=>{
    const hotline = await Hotline.findOne({where:{ id:id }})
    if (!hotline) {
        throw new AppError("Hotline not found", 404, true);
    }
    return hotline;
}
const getAllHotline= async (req: Request,res: Response)=>{
    const hotlines = await Hotline.find()
    res.json({
        message: "getting all hotlines successfully",
        status: true,
        hotlines: hotlines
    })
}
const createHotline =async(payload:Hotline)=>{
    const hotline= await Hotline.findOne({where: {id:payload.id,hotlineNumber:payload.hotlineNumber}})
    if(hotline){
        throw new AppError("Hotline already exists", 409, true)
    }
    const newHotline = await Hotline.create(payload)
    return newHotline.save()
}
export{getAllHotline,getHotlineBYID,createHotline}