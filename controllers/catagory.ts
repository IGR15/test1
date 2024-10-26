import { Request,Response } from "express";
import { Catagory } from "../db/entities/Catagory.js";
import { AppError } from "../errors/AppErrors.js";
import { Shop } from "../db/entities/Shop.js";
const createCatagory= async (payload:Catagory,)=>{
const catagory =await Catagory.findOne({where:{id:payload.id,catagoryName: payload.catagoryName} });
if(catagory) {
    throw new AppError ('catagory already exists',404,true);
}
const newCatagory = await Catagory.create(payload)
return newCatagory.save()

}

const getAllCatategories = async (req: Request, res: Response) => {
    const catagory = await Catagory.find()

    res.json({
        message: "getting all catatgories successfully",
        status: true,
        catagory:catagory
    })
}
export{getAllCatategories,createCatagory}