import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientService } from "src/client/client.service";
import { ProductService } from "src/product/product.service";
import { Repository } from "typeorm";
import { orderDTO } from "./order.dto";
import { OrderModel } from "./order.model";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderModel)
        private orderRepository: Repository<OrderModel>,
        private clientService: ClientService,
        private productService: ProductService
    ){}

    async create(order: orderDTO): Promise<OrderModel> {
        const clientId = order.client.id;
        const client = this.clientService.findOne(clientId);
        const productId = order.product.id;
        const product = this.productService.findOne(productId);
        if ( client != null && product != null) {
            return this.orderRepository.create(order);
        }
        return Promise.reject();
    }

    findAll():Promise<OrderModel[]> {
        return this.orderRepository.find();
    }

    findOne(id: string) : Promise<OrderModel> {
        return this.orderRepository.findOne(id);
    }

    findByClient(id:string): Promise<OrderModel[]> {
        return this.orderRepository.createQueryBuilder("order")
            .where("order.client = !id", {id}).getMany();
    } 
}