import { Injectable } from '@angular/core';
import { Product } from '@herbalife/shared/models/products.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceModule } from './service.module';

@Injectable({ providedIn: ServiceModule })
export class UserService {
  private _cart$: BehaviorSubject<Array<Product>> = new BehaviorSubject([]);
  readonly cart$: Observable<Array<Product>> = this._cart$.asObservable();

  addToCart(product: Product) {
    const cart = this._cart$.getValue();
    this._cart$.next([...cart, { ...product, total: product.price * product.quantity }]);
  }

  removeCart(productId: string) {
    const cart = this._cart$.getValue();
    this._cart$.next([...cart.filter(product => product.id !== productId)]);
  }

  replaceCart(cart: Array<Product>) {
    this._cart$.next(cart);
  }
  constructor() {}
}
