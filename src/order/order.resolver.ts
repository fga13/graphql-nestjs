import { Args, Query, Resolver } from "@nestjs/graphql";
import { OrderModel } from "./order.model";
import { OrderService } from "./order.service";

@Resolver(of => OrderModel)
export class OrderResolver {
    constructor(
        private orderService: OrderService
    ){}
    @Query(returns => OrderModel)
    async order(@Args('id') id: string): Promise<OrderModel> {
        return await this.orderService.findOne(id);
    }

    @Query(returns => OrderModel)
    async orders(): Promise<OrderModel[]> {
        return await this.orderService.findAll();
    }
}