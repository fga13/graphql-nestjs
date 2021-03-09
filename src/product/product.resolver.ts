import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { OrderModel } from "src/order/order.model";
import { OrderService } from "src/order/order.service";
import { ProductModel } from "./product.model";
import { ProductModule } from "./product.module";
import { ProductService } from "./product.service";

@Resolver(of => ProductModel)
export class ProductResolver {
    constructor(
        private orderService: OrderService,
        private productService: ProductService
    ){}
    @Query(returns => ProductModel)
    async product(@Args('id') id: string): Promise<ProductModel> {
        return await this.productService.findOne(id);
    }
 
    @ResolveField(returns => OrderModel)
    async orders(@Parent() client) {
        const {id} = client;
        return this.orderService.findByClient(id);
    }

    @Mutation(returns=> ProductModel)
    async createProduct(
        @Args("name") name: string,
        @Args("price") price: Number
    ) {
        return await this.productService.create({name, price});
    }
}