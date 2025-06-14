import { Injectable } from "@nestjs/common";
import { GetClientRepository } from "../Repositories/get-client.repositoty";
import { IClientEntity } from "../Interfaces/IClientEntity";


@Injectable()

export class GetClientService{
    
    constructor(private readonly getClientRepository: GetClientRepository){}

    async execute(): Promise<IClientEntity[]>{
        const clients = await this.getClientRepository.execute()

        return clients
    }
}