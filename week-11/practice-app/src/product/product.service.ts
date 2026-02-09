import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Piano', price: 20 },
    { id: 2, name: 'laptop', price: 50 },
    { id: 3, name: 'Power Cable', price: 90 },
  ];
  getProduct() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
