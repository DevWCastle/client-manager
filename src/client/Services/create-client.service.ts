import { Injectable } from "@nestjs/common";
import { CreateClientRepository } from "../Repositories/create-client.repository";
import { IClientEntity } from "../Interfaces/IClientEntity";

@Injectable()

export class CreateClientService{
    constructor(
        private readonly createClientRepository: CreateClientRepository
    ){}


    async execute(client: IClientEntity): Promise<string>{//poderia trocar esse retorno para uma httpResponse no caso ou sla
        const newClient = await this.createClientRepository.execute(client)
        
        return newClient.name

    }

}




