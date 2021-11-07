import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@herbalife/core/providers/service/user.service';
import { ProductsService } from '@herbalife/feature/products/providers/products.service';
import { Product, TypeProduct } from '@herbalife/shared/models/products.model';
import {
  combineLatest,
  filter,
  from,
  map,
  Observable,
  switchMap,
  toArray,
} from 'rxjs';

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
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['products', 'list'], {
      queryParams: { type: 'all' },
    });

    const routeQueryParams$ = this.route.queryParamMap.pipe(
      map(params => params.get('type') as TypeProduct)
    );
    const products$ = this.productsService
      .getAllProducts()
      .pipe(switchMap(products => from(products)));
    const cart$ = this.userService.cart$;

    this.products$ = combineLatest([routeQueryParams$, cart$]).pipe(
      switchMap(([type, cart]) =>
        products$.pipe(
          filter(product => product.types.includes(type)),
          map(product => ({
            ...product,
            isInCart: !!cart.find(cartProduct => cartProduct.id === product.id),
          })),
          toArray()
        )
      )
    );
  }

  addToCart(product: Product): void {
    this.userService.addToCart(product);
  }

  removeFromCart(product: Product): void {
    this.userService.removeCart(product.id);
  }
}
