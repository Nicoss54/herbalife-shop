import { Component, Input } from '@angular/core';
import { Product } from '@herbalife/shared/models/products.model';

@Component({
  selector: 'herbalife-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
  constructor() {}
}
