import { Request,Response } from "express";
import { AppError } from "../errors/AppErrors.js";
import { Product } from "../db/entities/Product.js";
import { Shop } from "../db/entities/Shop.js";
import { Catagory } from "../db/entities/Catagory.js";
import { In } from "typeorm";
const createProduct =async (payload:Product,shopId:string,catagoryId:number[])=>{
    const shop= await Shop.findOne({where:{id:shopId}})
    const catagory= await Catagory.findOne({where:{id:In(catagoryId)}})
    if(!shop){
        throw new AppError('Shop not found', 404, true)
    }
    if(!catagory){
        throw new AppError('Catagory not found', 404, true)
    }

    const product = await Product.findOne({
        where:{id:payload.id, name:payload.name,price:payload.price,}
    })
    if(product){
        throw new AppError('Product already exists', 400, true)
    }
    const newProduct = Product.create({...payload,shop:shop,
        catagoryes:[catagory]
    })
    return newProduct.save()
}
const getProductById=async(id:number)=>{
    const product = await Product.findOne({where:{id:id}})
    if(!product){
        throw new AppError('Product not found', 404, true)
    }
    return product
}
const getAllProducts=async(req: Request, res:Response)=>{
    const products = await Product.find()
    res.json({
        message: 'getting all products successfully',
        success:true,
        products:products
    })
}
export {getProductById,createProduct,getAllProducts}