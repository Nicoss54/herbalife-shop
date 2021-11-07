import { Component, OnInit } from '@angular/core';
import { UserService } from '@herbalife/core/providers/service/user.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'herbalife-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemsNumber$: Observable<number>;
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.cartItemsNumber$ = this.userService.cart$.pipe(
      map(cart => cart.length)
    );
  }
}
