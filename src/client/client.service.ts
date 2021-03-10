import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClientDTO } from "./client.dto";
import { ClientModel } from "./client.model";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientModel)
        private clientRepository: Repository<ClientModel>
    ){}

    create(client: ClientDTO) : Promise<ClientModel> {
        return this.clientRepository.save(client);
    }

    findAll(): Promise<ClientModel[]> {
        return this.clientRepository.find();
    }

    findOne(id: string): Promise<ClientModel> {
        return this.clientRepository.findOne(id);
    }
}