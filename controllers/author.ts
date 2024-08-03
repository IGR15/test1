import { Author } from "../db/entities/Author.js";
import { Address } from "../db/entities/Address.js";
import { AppError } from "../errors/AppErrors.js";
import bcrypt from "bcrypt";

const createAuthorController = async (payload: Author,addressId:number) => {
    const author = await Author.findOne({ where: { email: payload.email }})
    const address =await Address.findOne({ where: { id:addressId }})

    if(author){
        throw new AppError("author already exists", 409, true)
    }
    if(!address){
        throw new AppError("address not found", 404, true)
    }
    

    payload.password = await bcrypt.hash(payload.password, 10)

    const newAuthor = await Author.create({...payload,address}).save()

    return newAuthor
}

export {createAuthorController}