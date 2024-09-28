import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from "./Component/home/home.component";
import { FooterComponent } from './Component/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavBarComponent, HomeComponent,FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {
    // Navigate to home without changing the URL
    this._router.navigateByUrl('/home').then(() => {
      // Update the URL in the browser without pushing a new history entry
      history.replaceState({}, '', '/');
    });
  }
  
}