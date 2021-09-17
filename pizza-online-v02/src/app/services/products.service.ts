import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _productsUrl = 'http://localhost:3123/api/products';
  private _premiumUrl = 'http://localhost:3123/api/premium';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this._productsUrl);
  }

  getPremium() {
    return this.http.get<any>(this._premiumUrl);
  }
}
