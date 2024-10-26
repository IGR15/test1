import { Router, Request, Response, NextFunction } from "express"
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";
import { Product } from "../db/entities/Product.js";
import { createProduct, getAllProducts, getProductById } from "../controllers/product.js";
const router=Router()
router.get('/',logRequestMiddleware,getAllProducts)
router.get('/:id',async(req:Request, res:Response, next:NextFunction)=>{
const id =Number(req.params.id)
    try {
        const product = await getProductById(id)
        res.json({
            message:"product fetcded successfully",
            success:true,
            product:product
        })
    
} catch (error) {
    console.log("error", error);
    next(error)
    
    
}
})
router.post('/',async(req:Request, res:Response,next:Function)=>{
    const payload:Product = req.body
    if(!payload.name||!payload.price){
        res.status(400).json({
            message:"missing field",
            success:false})
    }
    try {
        const product = await createProduct(payload,req.body.shopId,req.body.catagoryId)
        res.status(201).json({
            message:"product created successfully",
            success:true,
            product:product
        })
    } catch (error) {
        console.log("error", error);
        next(error)
        
        
    }
})






export default router;