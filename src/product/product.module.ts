import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderModule } from "src/order/order.module";
import { ProductModel } from "./product.model";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductModel]), forwardRef(()=> OrderModule)],
    providers: [ProductService, ProductResolver],
    exports: [ProductService]
})
export class ProductModule {}