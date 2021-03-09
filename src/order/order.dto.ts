import { ClientModel } from "src/client/client.model";
import { ProductModel } from "src/product/product.model";

export interface orderDTO {
    orderDate: Date;
    product: ProductModel;
    client: ClientModel;
}