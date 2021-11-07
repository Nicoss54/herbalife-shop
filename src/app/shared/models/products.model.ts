interface ITypeProducts {
  id: TypeProduct;
  name: string;
}

interface IProduct {
  id: string;
  name: string;
  quantity: number;
  photo: string;
  types: Array<TypeProduct>;
  price: number;
  isInCart?: boolean;
  total?: number;
}

export enum TypeProduct {
  INTERNAL_NUTRITION = 'internal_nutrition',
  EXTERNAL_NUTRITION = 'external_nutrition',
  SPORT = 'sport',
  ALL = 'all',
}

export type Product = Readonly<IProduct>;
export type TypeProducts = Readonly<ITypeProducts>;
