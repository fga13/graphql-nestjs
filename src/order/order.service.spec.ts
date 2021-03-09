import { Test, TestingModule } from "@nestjs/testing";
import { ClientService } from "src/client/client.service";
import { Repository } from "typeorm";
import { OrderService } from "./order.service";
import { ProductService } from "src/product/product.service";

describe('OrderService', () => {
    let service: OrderService;

    beforeEach(async() => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OrderService,
                ClientService,
                ProductService,
                {
                    provide: 'OrderModelRepository',
                    useClass: Repository
                },
                {
                    provide: 'ClientModelRepository',
                    useClass: Repository
                },
                {
                    provide: 'ProductModelRepository',
                    useClass: Repository
                }
            ]

        }).compile();

        service = module.get<OrderService>(OrderService);
    })

    it("should be defined", () => {
        expect(service).toBeDefined();
    })
})