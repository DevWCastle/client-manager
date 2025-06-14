import { Injectable } from "@nestjs/common";
import { DeleteClientRepository } from "../Repositories/delete-client.repository";
import { DeleteResult } from "mongoose";

@Injectable()

export class DeleteClientService{
    constructor(private readonly deleteClientRepository: DeleteClientRepository){}

    async execute(idClient: string): Promise<DeleteResult>{
        const deletedCount = await this.deleteClientRepository.execute(idClient)
        return deletedCount
    }

}