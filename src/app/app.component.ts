import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from "./Component/home/home.component";
import { AboutComponent } from "./Component/about/about.component";
import { ServicesComponent } from "./Component/services/services.component";
import { StatisticsComponent } from "./Component/statistics/statistics.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomeComponent, AboutComponent, ServicesComponent, StatisticsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}