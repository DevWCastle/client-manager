import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientModule, 
    MongooseModule.forRoot('mongodb+srv://DevWCastle:bCFtGWv6lB6gomKD@client-manager.1qrmbgp.mongodb.net/?retryWrites=true&w=majority&appName=client-manager')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
