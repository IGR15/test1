import { Request,Response } from "express";
import { AppError } from "../errors/AppErrors.js";
import { Shop } from "../db/entities/Shop.js";
import { Hotline } from "../db/entities/Hotline.js";
import bcrypt from "bcrypt"
const creatShop = async (payload:Shop,hotlineId:string) => {
    const shop =await Shop.findOne({where:{email:payload.email}})
    const hotline= await Hotline.findOne({where:{id:hotlineId}})
    if(shop){
        throw new AppError('Shop already exists', 400, true)
    }
    if(!hotline){
        throw new AppError('Hotline not found', 400, true)
    }
    payload.password = await bcrypt.hash(payload.password,10)
    const newShop = Shop.create({...payload,hotline})
    return await newShop.save()
}
const getShopById = async(id:string)=>{
    const shop = await Shop.findOne({where:{id:id}})
    if(!shop){
        throw new AppError('Shop not found', 404, true)
    }
    return shop
}
export{creatShop,getShopById}
