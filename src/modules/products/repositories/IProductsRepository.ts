import Product from "../infra/typeorm/entities/Product";

import ICreateProductDTO from "../dtos/ICreateProductDTO";
import IUpdateProductsQuantityDTO from "../dtos/IUpdateProductsQuantityDTO";

interface IFindProducts {
  id: string;
}

export default interface IProductsRepository {
  updateQuantity(products: IUpdateProductsQuantityDTO[]): Promise<Product[]>;
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | undefined>;
  findAllById(products: IFindProducts[]): Promise<Product[]>;
}
