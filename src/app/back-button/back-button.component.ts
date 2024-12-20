import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
  isHome: boolean = false;

  constructor(private location: Location, private router: Router) {
    this.isHome = this.router.url === '/'; // Verifica si estás en la Home
  }

  goBack(): void {
    this.location.back();
  }
}
