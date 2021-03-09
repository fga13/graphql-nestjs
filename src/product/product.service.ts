import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDTO } from "./product.dto";
import { ProductModel } from "./product.model";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductModel)
        private productRepository: Repository<ProductModel>
    ){}

    async create(product: ProductDTO): Promise<ProductModel> {
        return this.productRepository.save(product);
    }

    findAll(): Promise<ProductModel[]> {
        return this.productRepository.find();
    }

    findOne(id: string): Promise<ProductModel> {
        return this.productRepository.findOne(id);
    }
}