import { InjectionToken } from '@angular/core';
import {
  TypeProduct,
  TypeProducts,
} from '@herbalife/shared/models/products.model';

export const TYPE_PRODUCTS: Array<TypeProducts> = [
  { id: TypeProduct.ALL, name: 'Tous les produits' },
  { id: TypeProduct.INTERNAL_NUTRITION, name: 'Nutrition Interne' },
  { id: TypeProduct.EXTERNAL_NUTRITION, name: 'Nutrition Externe' },
  { id: TypeProduct.SPORT, name: 'Sport' },
];

export const TYPE_PRODUCT_PROVIDER = new InjectionToken<Array<TypeProducts>>(
  'TYPES_PRODUCTS'
);
