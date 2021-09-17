import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
})
export class PremiumComponent implements OnInit {
  premiums = [];
  constructor(
    private _productsService: ProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._productsService.getPremium().subscribe(
      (res) => {
        this.premiums = res;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 418) {
            this._router.navigate(['/login']);
          }
        }
        console.log(err);
      }
    );
  }
}
