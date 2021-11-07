import { NgModule } from '@angular/core';
import { SharedModule } from '@herbalife/shared/shared.module';
import { FilterNavigationComponent } from './list/components/filter-navigation/filter-navigation.component';
import { ProductListComponent } from './list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './providers/products.service';
import { ProductItemComponent } from './list/components/product-item/product-item.component';

@NgModule({
  imports: [ProductsRoutingModule, SharedModule],
  exports: [],
  declarations: [
    ProductListComponent,
    ProductsComponent,
    FilterNavigationComponent,
    ProductItemComponent,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
