import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@herbalife/core/providers/service/user.service';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { CartForm } from './cart.form';

@Component({
  selector: 'herbalife-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartForm: CartForm;
  totalCart$: Observable<number>;
  private unsubscribe$: Subject<any> = new Subject();
  constructor(private readonly userService: UserService, private readonly changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cartForm = new CartForm();
    this.totalCart$ = this.userService.cart$.pipe(map(cart => cart.reduce((acc, product) => (acc += product.total), 0)));

    this.userService.cart$.pipe(take(1)).subscribe(cart => {
      this.cartForm.patchValue(cart);
    });

    this.cartForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(cart => this.userService.replaceCart(cart));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  removeItemFromCart(index: number): void {
    this.cartForm.removeAt(index);
  }
}
