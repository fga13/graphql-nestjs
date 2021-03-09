import { Test, TestingModule } from "@nestjs/testing";
import { Repository } from "typeorm";
import { ProductService } from "./product.service";

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(async() => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductService,
                {
                    provide: 'ProductModelRepository',
                    useClass: Repository
                }
            ]

        }).compile();

        service = module.get<ProductService>(ProductService);
    })

    it("should be defined", () => {
        expect(service).toBeDefined();
    })
})