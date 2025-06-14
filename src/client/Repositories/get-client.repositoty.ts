import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "../Schema/client.schema";
import { Model } from "mongoose";
import { IClientEntity } from "../Interfaces/IClientEntity";

@Injectable()

export class GetClientRepository{
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>
    ){ }


    async execute():Promise<IClientEntity[]>{
        const clients = await this.clientModel.find()

        return clients
    }
}