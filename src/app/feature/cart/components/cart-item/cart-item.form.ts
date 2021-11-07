import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '@herbalife/shared/models/products.model';
import { Subject, takeUntil } from 'rxjs';

export class CartItemForm extends FormGroup {
  override value: Product;
  constructor(whenUnsubscribe$: Subject<boolean>) {
    super({
      id: new FormControl(null),
      name: new FormControl(null),
      quantity: new FormControl(null),
      photo: new FormControl(null),
      types: new FormControl(null),
      price: new FormControl(null),
      total: new FormControl(null),
    });

    this.get('quantity')
      .valueChanges.pipe(takeUntil(whenUnsubscribe$))
      .subscribe(value => {
        const { price } = this.value;
        this.get('total').patchValue(price * value);
      });
  }
}
