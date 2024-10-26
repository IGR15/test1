import { Router, Request, Response, NextFunction } from "express"
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";
import { Catagory } from "../db/entities/Catagory.js";
import { createCatagory, getAllCatategories } from "../controllers/catagory.js";
const router=Router()
router.post('/',async (req:Request, res:Response,next:NextFunction) => {

    const payload:Catagory=req.body
    try {
        if(!payload.catagoryName){
            res.status(400).json({
                message:"missing field",
                success:false
        })
        return
        

    } 
    const catagory = await createCatagory(payload);
        res.status(200).json({
            message:"catagory created successfully",
            success:true,
            catagory:catagory})  
    } catch (error) {
        console.log("error", error)
        next(error)
    }
})
router.get('/',logRequestMiddleware,getAllCatategories)
export default router;
