import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { CreateClientRepository } from './Repositories/create-client.repository';
import { CreateClientService } from './Services/create-client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './Schema/client.schema';
import { GetClientRepository } from './Repositories/get-client.repositoty';
import { GetClientService } from './Services/get-client.service';
import { DeleteClientRepository } from './Repositories/delete-client.repository';
import { DeleteClientService } from './Services/delete-client.service';
import { UpdateClientRepository } from './Repositories/update-client.repository';
import { UpdateClientService } from './Services/update-client.service';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: Client.name,
      schema: ClientSchema
    }])
  ],

  controllers: [ClientController],
  providers: [
    CreateClientRepository, CreateClientService, 
    GetClientRepository, GetClientService, 
    DeleteClientRepository, DeleteClientService,
    UpdateClientRepository, UpdateClientService
  ],
  exports: [
    CreateClientRepository, CreateClientService,
    GetClientRepository, GetClientService,
    DeleteClientRepository, DeleteClientService,
    UpdateClientRepository, UpdateClientService
  ]
})
export class ClientModule {}
