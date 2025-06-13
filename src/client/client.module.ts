import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { CreateClientRepository } from './Repositories/create-client.repository';
import { CreateClientService } from './Services/create-client.service';

@Module({
  controllers: [ClientController],
  providers: [CreateClientRepository, CreateClientService],
  exports: [CreateClientRepository, CreateClientService]
})
export class ClientModule {}
