import { Router, Request, Response, NextFunction } from "express"
import { createLibrary } from "../controllers/library.js";

const router = Router();
router.get('/',async(req:Request, res:Response, next:NextFunction) =>{

try {
    if(!req.body.name){
        res.status(400).json({message:"some fields are required",success:false})

    }
    const library = await createLibrary(req.body)
    res.status(200).json({message:"library created successfully",success:true,library:library})
} catch (error) {
    next(error)
}

})
export default router;