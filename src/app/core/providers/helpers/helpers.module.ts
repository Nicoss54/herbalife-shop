import { NgModule } from '@angular/core';
import { PRODUCTS, PRODUCT_PROVIDER } from './products';
import { TYPE_PRODUCTS, TYPE_PRODUCT_PROVIDER } from './type-products';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: TYPE_PRODUCT_PROVIDER,
      useValue: TYPE_PRODUCTS,
    },
    {
      provide: PRODUCT_PROVIDER,
      useValue: PRODUCTS,
    },
  ],
})
export class HelpersModule {}
