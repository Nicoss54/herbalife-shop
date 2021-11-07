import { FormArray, FormControl } from '@angular/forms';
import { Product } from '@herbalife/shared/models/products.model';

export class CartForm extends FormArray {
  override controls: Array<FormControl>;
  override value: Array<Product>;

  constructor() {
    super([]);
  }

  override patchValue(array: Array<Product>): void {
    this.clear();
    array
      .map(product => new FormControl(product))
      .forEach(control => this.push(control));
  }
}
