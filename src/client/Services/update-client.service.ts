import { Injectable } from "@nestjs/common";
import { UpdateClientRepository } from "../Repositories/update-client.repository";
import { ClientDocument } from "../Schema/client.schema";
import { IClientEntity } from "../Interfaces/IClientEntity";

@Injectable()
export class UpdateClientService{
    constructor(
        private readonly updateClientRepository: UpdateClientRepository
    ){}


    async execute(idClient: string, clientData: IClientEntity): Promise<ClientDocument | null>{
        
        const updateClient = await this.updateClientRepository.execute(idClient, clientData);
        return updateClient

    }
}