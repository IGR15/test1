import { Router, Request, Response, NextFunction } from "express"
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";
import { Shop } from "../db/entities/Shop.js";
import { creatShop, getShopById } from "../controllers/shop.js";
const router=Router()
router.get('/:id', async (req:Request, res:Response,next:NextFunction) => {
    const id = req.params.id
    try {
        const shop = await getShopById(id)
        res.json({
            message: 'Shop fetched successfully',
            success:true,
            shop:shop
        })
    } catch (error) {
        console.log("error"+error);
        next(error);
        
        
    }
})
router.post('/',async (req:Request,res:Response,next:NextFunction) => {
    const payload:Shop = req.body
    try {
        if(!payload.shopName||!payload.email||!payload.password){
            res.status(400).json({
                message:"missing field",
                success:false})
        }
        const shop = await creatShop(payload,req.body.hotlineId)
        res.status(201).json({
            message:"shop created successfully",
            success:true,
            shop:shop
        })
    } catch (error) {
        console.log("error"+error);
        next(error);
        
        
    }
})




export default router;