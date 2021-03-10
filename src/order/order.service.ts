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
        const {orderDate, clientId, productId} = order;
        const client = await this.clientService.findOne(clientId);
        const product = await this.productService.findOne(productId);
        const orderBean = new OrderModel();
        orderBean.orderDate = orderDate;
        orderBean.client = client;
        orderBean.product = product;
        if ( client != null && product != null) {
            const result = await this.orderRepository.save(orderBean);
            return result;
        }
    }

    findAll():Promise<OrderModel[]> {
        return this.orderRepository.find();
    }

    findOne(id: string) : Promise<OrderModel> {
        return this.orderRepository.findOne(id);
    }

    findByClient(id:string): Promise<OrderModel[]> {
        return this.orderRepository.createQueryBuilder("order")
            .leftJoinAndSelect('order.product', 'product')
            .where("order.client = :id", {id}).getMany();
    } 
}