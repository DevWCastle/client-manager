import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "../Schema/client.schema";
import { Model } from "mongoose";
import { IClientEntity } from "../Interfaces/IClientEntity";


@Injectable() // Permite a injeção dessa classe em outras classes. Ou seja, esta classe pode ser utilizada em outras no constructor.
export class CreateClientRepository{
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,// ta injetando o cleintSchema como model privado com o nome clientModel
    ){}

    async execute(client: IClientEntity): Promise<IClientEntity>{
        const createdClient =  new this.clientModel(client)
        await createdClient.save()
        return createdClient.toObject()
    }

}


