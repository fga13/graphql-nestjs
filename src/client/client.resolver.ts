import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { OrderModel } from "src/order/order.model";
import { OrderService } from "src/order/order.service";
import { ClientModel } from "./client.model";
import { ClientDTO } from "./client.dto";
import { ClientService } from "./client.service";


@Resolver(of => ClientModel)
export class ClientResolver {
    constructor(
        private clientService: ClientService,
        private orderService: OrderService
    ) {}

    @Query(returns => ClientModel)
    async client(@Args('id') id:string): Promise<ClientModel> {
        return await this.clientService.findOne(id);
    }

    @Query(returns => [ClientModel])
    async clients(): Promise<ClientModel[]> {
        const list = await this.clientService.findAll();
        return list;
    }

    @ResolveField(returns => [OrderModel])
    async orders(@Parent() client) {
        const {id} = client;
        const result = await this.orderService.findByClient(id);
        console.log("orders", result);
        return result;
    }

    @Mutation(returns => ClientModel)
    async createClient(
        @Args('name') name:string,
        @Args('email') email: string,
        @Args('birthdate') birthdate: Date
    ): Promise<ClientModel> {
        const client: ClientDTO = {name, email, "dateOfBirth": birthdate};
        return await this.clientService.create(client);
    }
}