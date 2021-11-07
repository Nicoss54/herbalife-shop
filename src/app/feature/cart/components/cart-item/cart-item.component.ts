import { Component, EventEmitter, forwardRef, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Product } from '@herbalife/shared/models/products.model';
import { Subject } from 'rxjs';
import { CartItemForm } from './cart-item.form';

@Component({
  selector: 'herbalife-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CartItemComponent),
      multi: true,
    },
  ],
})
export class CartItemComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Output('removeItemFromCart') removeItemFromCart$: EventEmitter<void> = new EventEmitter<void>();
  cartItemForm: CartItemForm;
  private _onTouched: () => void;
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.cartItemForm = new CartItemForm(this.unsubscribe$);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  writeValue(product: Product): void {
    if (product) {
      this.cartItemForm.patchValue(product, { emitEvent: false });
    }
  }

  registerOnChange(fn: (x: Product) => void): void {
    this.cartItemForm.valueChanges.subscribe((product: Product) => {
      fn(product);
      this._onTouched();
    });
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  removeItem(): void {
    this.removeItemFromCart$.emit();
  }
}
