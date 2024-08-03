import { Address } from "../db/entities/Address.js"
import { AppError } from "../errors/AppErrors.js";

const createAddress=async(payload:Address)=>{
    const address = await Address.findOne({ where: { id: payload.id }})

    if(address){
        throw new AppError("author already exists", 409, true)
    }


    const newAddress = await Address.create(payload).save()

    return newAddress

}
export{createAddress}