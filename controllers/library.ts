import { Library } from "../db/entities/Library.js";
import { AppError } from "../errors/AppErrors.js";
const createLibrary = async (payload:Library)=>{
    const library = await Library.findOne({ where: { name: payload.name }})

    if(library){
        throw new AppError("author already exists", 409, true)
    }


    const newlibrary = await Library.create(payload).save()

    return newlibrary
}
export { createLibrary}