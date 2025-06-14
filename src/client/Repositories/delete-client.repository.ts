import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "../Schema/client.schema";
import { DeleteResult, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { IClientEntity } from "../Interfaces/IClientEntity";



@Injectable()

export class DeleteClientRepository{
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>
    ){}


    async execute(idClient: string): Promise<DeleteResult>{

        const deleteCount =  await this.clientModel.deleteOne({_id: idClient})
        return deleteCount
        
    }
}