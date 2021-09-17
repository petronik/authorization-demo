import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pizza-online-v02';

  constructor(private _auth: AuthService, private _router: Router) {}

  logout() {
    this._auth.logout();
    this._router.navigate(['/products']);
  }

  isLoggedIn() {
    return this._auth.isLoggedIn();
  }
}
