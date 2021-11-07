import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@herbalife/shared/models/products.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'herbalife-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output('addToCart') addToCart$: EventEmitter<Product> = new EventEmitter();
  @Output('removeFromCart') removeFromCart$: EventEmitter<Product> =
    new EventEmitter();
  isAlreadyInCart$: Observable<boolean>;

  constructor() {}

  addToCart() {
    this.addToCart$.emit(this.product);
  }

  removeFromCart(): void {
    this.removeFromCart$.emit(this.product);
  }
}
