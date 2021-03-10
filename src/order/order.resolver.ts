import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { resourceLimits } from "node:worker_threads";
import { ClientModel } from "src/client/client.model";
import { ClientService } from "src/client/client.service";
import { ProductModel } from "src/product/product.model";
import { ProductService } from "src/product/product.service";
import { OrderModel } from "./order.model";
import { OrderService } from "./order.service";

@Resolver(of => OrderModel)
export class OrderResolver {
    constructor(
        private orderService: OrderService,
        private clientService: ClientService,
        private productService: ProductService
    ){}
    @Query(returns => OrderModel)
    async order(@Args('id') id: string): Promise<OrderModel> {
        return await this.orderService.findOne(id);
    }

    @Query(returns => OrderModel)
    async orders(): Promise<OrderModel[]> {
        return await this.orderService.findAll();
    }

    @ResolveField(returns=> ClientModel)
    async client(@Parent() order) {
        const {client} = order;
        return await this.clientService.findOne(client.id);
    }

    @ResolveField(returns=> ProductModel)
    async product(@Parent() order) {
        const {product} = order;
        return await this.productService.findOne(product.id);
    }

    @Mutation(returns => OrderModel)
    async createOrder(
        @Args("clientId") clientId: string,
        @Args("productId") productId: string,
        @Args("date", {nullable: true}) orderDate: Date
    ) {
        let date: Date = orderDate;
        if (orderDate == null) {
            date = new Date();
        }
        return await this.orderService.create({"orderDate": date, productId, clientId});
    }
}