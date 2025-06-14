
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Document} from "mongoose";


export type ClientDocument = HydratedDocument<Client> //esta criando um tipo, que é uma referencia a esta classe Client.

@Schema()//Define que a classe abaixo sera um Schema
export class Client extends Document{//cria o Schema extendendo do Documents que é do TS

    @Prop({required: true})//Define as propriedades da classe Client, e tem como parametros alguns metodos de verificação.
    name: string

    @Prop({required: true})
    cpf: number

    @Prop({required: true})
    email: string

    @Prop({ required: true})
    password: string

    @Prop({ required: true, default: Date.now})
    createdData: Date

}


export const ClientSchema = SchemaFactory.createForClass(Client)//Tranforma a classe client em um schema utilizando o SchemaFactory