import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@herbalife/feature/products/providers/products.service';
import { Product, TypeProduct } from '@herbalife/shared/models/products.model';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'herbalife-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<Product>>;
  constructor(
    private readonly productsService: ProductsService,
    private readonly router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products$ = this.router.queryParamMap.pipe(
      map(params => params.get('type')),
      switchMap(type =>
        this.productsService.getAllProducts().pipe(
          map(products => {
            if (!type || type === TypeProduct.ALL) {
              return products;
            } else if (type === TypeProduct.INTERNAL_NUTRITION) {
              return products.filter(
                ({ type }) => type === TypeProduct.INTERNAL_NUTRITION
              );
            } else if (type === TypeProduct.EXTERNAL_NUTRITION) {
              return products.filter(
                ({ type }) => type === TypeProduct.EXTERNAL_NUTRITION
              );
            } else if (type === TypeProduct.SPORT) {
              return products.filter(({ type }) => type === TypeProduct.SPORT);
            } else {
              return [];
            }
          })
        )
      )
    );
  }
}
