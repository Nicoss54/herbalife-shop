import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@herbalife/feature/products/providers/products.service';
import { TypeProducts } from '@herbalife/shared/models/products.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'herbalife-filter-navigation',
  templateUrl: 'filter-navigation.component.html',
  styleUrls: ['filter-navigation.component.scss'],
})
export class FilterNavigationComponent implements OnInit {
  typeProducts: Observable<Array<TypeProducts>>;
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.typeProducts = this.productsService.getAllTypeOfProducts();
  }
}
