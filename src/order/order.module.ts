import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientModel } from "src/client/client.model";
import { ClientModule } from "src/client/client.module";
import { OrderResolver } from "src/order/order.resolver";
import { ProductModule } from "src/product/product.module";
import { OrderModel } from "./order.model";
import { OrderService } from "./order.service";

@Module({
    imports: [TypeOrmModule.forFeature([OrderModel]), forwardRef (() => ProductModule), forwardRef(()=> ClientModule)],
    providers: [OrderService, OrderResolver],
    exports: [OrderService]
})
export class OrderModule {}