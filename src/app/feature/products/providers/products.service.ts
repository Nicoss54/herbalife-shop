import { Inject, Injectable } from '@angular/core';
import { PRODUCT_PROVIDER } from '@herbalife/core/providers/helpers/products';
import { TYPE_PRODUCT_PROVIDER } from '@herbalife/core/providers/helpers/type-products';
import { Product, TypeProducts } from '@herbalife/shared/models/products.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(TYPE_PRODUCT_PROVIDER)
    private readonly typeProducts: Array<TypeProducts>,
    @Inject(PRODUCT_PROVIDER) private readonly products: Array<Product>
  ) {}

  getAllTypeOfProducts(): Observable<Array<TypeProducts>> {
    return of(this.typeProducts);
  }

  getAllProducts(): Observable<Array<Product>> {
    return of(this.products);
  }
}
