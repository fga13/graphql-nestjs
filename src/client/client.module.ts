import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderModule } from "src/order/order.module";
import { ProductModule } from "src/product/product.module";
import { ClientModel } from "./client.model";
import { ClientResolver } from "./client.resolver";
import { ClientService } from "./client.service";

@Module({
    imports: [TypeOrmModule.forFeature([ClientModel]), forwardRef(() => OrderModule), forwardRef(() => ClientModule)],
    providers: [ClientService, ClientResolver],
    exports: [ClientService]
})
export class ClientModule {}