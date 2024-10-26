import { Request,Response, Router,NextFunction } from "express";
import { Hotline } from "../db/entities/Hotline.js";
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";
import { createHotline, getAllHotline, getHotlineBYID } from "../controllers/hotline.js";
const router=Router();
router.get('/:id',async(req:Request, res:Response, next:NextFunction)=>{
    const id = req.params.id
    try {
        const hotline = await getHotlineBYID(id)
        res.json({
            message: 'Hotline fetched successfully',
            success:true,
            hotline:hotline
        })
    } catch (error) {
        console.log("error"+error);
        next(error)
        
    }
})
router.get('/',logRequestMiddleware,getAllHotline)
router.post('/',async(req:Request, res:Response, next:NextFunction)=>{
    const payload: Hotline = req.body
    if(!payload.hotlineNumber){
        res.status(400).json({
            message: "missing field",
            success: false
        })
    }
    try {
        const hotline = await createHotline(payload)
        res.json({
            message: 'Hotline created successfully',
            success: true,
            hotline: hotline
        })
    } catch (error) {
        console.log("error", error)
        next(error)
    }
})
export default router