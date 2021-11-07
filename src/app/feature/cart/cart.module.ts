import { NgModule } from '@angular/core';
import { SharedModule } from '@herbalife/shared/shared.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [SharedModule, CartRoutingModule],
  declarations: [CartComponent, CartItemComponent],
})
export class CartModule {}
