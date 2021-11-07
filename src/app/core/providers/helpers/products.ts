import { InjectionToken } from '@angular/core';
import { Product, TypeProduct } from '@herbalife/shared/models/products.model';

export const PRODUCTS: Array<Product> = [
  {
    id: 'formula_1_champignon',
    name: 'Formula 1 Champignon',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 59.5,
  },
  {
    id: 'formula_1_classic',
    name: 'Formula 1 Classique',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 54,
  },
  {
    id: 'formula_1_780',
    name: 'Formula 1 780g',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 68,
  },
  {
    id: 'formula_1_sachet',
    name: 'Formula 1 Sachet',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 20.5,
  },
  {
    id: 'tri_blend',
    name: 'Tri Blend',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 77.5,
  },
  {
    id: 'pro_20',
    name: 'Pro20',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 71.5,
  },
  {
    id: 'chips',
    name: 'Chips',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 23,
  },
  {
    id: 'protein bar',
    name: 'Barres protéinées',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 26.5,
  },
  {
    id: 'pdm',
    name: 'PDM',
    quantity: 1,
    photo: 'test.png',
    type: TypeProduct.INTERNAL_NUTRITION,
    price: 65,
  },
];

export const PRODUCT_PROVIDER = new InjectionToken<Array<Product>>('PRODUCTS');
