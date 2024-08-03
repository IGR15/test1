import { Router, Request, Response, NextFunction } from "express"
import { createAddress } from "../controllers/address.js";
const router =Router();
router.get('/',async(req:Request, res:Response, next:NextFunction) =>{





})
router.post('/',async(req:Request, res:Response, next:NextFunction) =>{
    try {
        if(!req.body.street||!req.body.city||!req.body.country){
            res.status(400).json({message:"some fields are required",success:false})
            
        }
        const address= await createAddress(req.body)
        res.status(201).json({message:"address created successfully",success:true,address:address})

    } catch (error) {
        next(error)
    }

})
export default router;