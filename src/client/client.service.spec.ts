import { Test, TestingModule } from "@nestjs/testing";
import { Repository } from "typeorm";
import { ClientService } from "./client.service";

describe('ClientService', () => {
    let service: ClientService;

    beforeEach(async() => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ClientService,
                {
                    provide: 'ClientModelRepository',
                    useClass: Repository
                }
            ]

        }).compile();

        service = module.get<ClientService>(ClientService);
    })

    it("should be defined", () => {
        expect(service).toBeDefined();
    })
})