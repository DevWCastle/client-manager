import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientService } from './Services/create-client.service';
import { IClientEntity } from './Interfaces/IClientEntity';

@Controller('client')
export class ClientController {

    constructor(
        private readonly createClientService: CreateClientService
    ){}

    @Post("create")// http://api.com/client/create no metodo post 
    async create(@Body() client: IClientEntity): Promise<IClientEntity>{
    //precisa de um body com um client do tipo ICleintEntity como parametros e retorna uma promise desse mesmo tipo

    const newClient =  this.createClientService.execute(client)
    return newClient

    }


}
