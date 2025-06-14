import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "../Schema/client.schema";
import { Model, set, UpdateResult } from "mongoose";
import { IClientEntity } from "../Interfaces/IClientEntity";


@Injectable()
export class UpdateClientRepository{
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>
    ){}

    async execute(idClient:string, clientData: IClientEntity ):Promise<ClientDocument | null>{

        const updateClient = await this.clientModel.findByIdAndUpdate(
            idClient,
            {$set: clientData},
            { new: true, runValidators: true }
        )

        return updateClient
    }

}