import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
})
export class PremiumComponent implements OnInit {
  premiums = [];
  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getPremium().subscribe(
      (res) => {
        this.premiums = res;
      },
      (err) => console.log(err)
    );
  }
}
