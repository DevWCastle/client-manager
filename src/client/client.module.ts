import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { CreateClientRepository } from './Repositories/create-client.repository';
import { CreateClientService } from './Services/create-client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './Schema/client.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: Client.name,
      schema: ClientSchema
    }])
  ],

  controllers: [ClientController],
  providers: [CreateClientRepository, CreateClientService],
  exports: [CreateClientRepository, CreateClientService]
})
export class ClientModule {}
