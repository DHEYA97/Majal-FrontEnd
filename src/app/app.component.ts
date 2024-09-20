import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from "./Component/home/home.component";
import { AboutComponent } from "./Component/about/about.component";
import { ServicesComponent } from "./Component/services/services.component";
import { StatisticsComponent } from "./Component/statistics/statistics.component";
import { SystemComponent } from './Component/system/system.component';
import { PartnearComponent } from './Component/partnear/partnear.component';
import { OrderServiceComponent } from "./Component/order-service/order-service.component";
import { ClientComponent } from "./Component/client/client.component";
import { AfterSalesComponent } from "./Component/after-sales/after-sales.component";
import { ContactUsComponent } from "./Component/contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavBarComponent, HomeComponent,
    AboutComponent, ServicesComponent, StatisticsComponent,
    SystemComponent, PartnearComponent, OrderServiceComponent,
    ClientComponent, AfterSalesComponent,ContactUsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}