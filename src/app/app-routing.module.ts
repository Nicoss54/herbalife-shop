import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: async () =>
      (await import('./feature/products/products.module')).ProductsModule,
  },
  {
    path: 'cart',
    loadChildren: async () =>
      (await import('./feature/cart/cart.module')).CartModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
