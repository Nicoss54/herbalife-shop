import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@herbalife/feature/products/providers/products.service';
import { Product, TypeProduct } from '@herbalife/shared/models/products.model';
import { filter, from, map, Observable, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'herbalife-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<Product>>;
  constructor(
    private readonly productsService: ProductsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['products', 'list'], {
      queryParams: { type: 'all' },
    });
    this.products$ = this.route.queryParamMap.pipe(
      map(params => params.get('type') as TypeProduct),
      switchMap(type =>
        this.productsService.getAllProducts().pipe(
          switchMap(products => from(products)),
          filter(({ types }) => types.includes(type)),
          toArray()
        )
      )
    );
  }
}
