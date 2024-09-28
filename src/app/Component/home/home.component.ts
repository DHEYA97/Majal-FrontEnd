import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { OrderServiceComponent } from '../order-service/order-service.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AfterSalesComponent } from '../after-sales/after-sales.component';
import { PartnearComponent } from '../partnear/partnear.component';
import { SystemComponent } from '../system/system.component';
import { ClientComponent } from '../client/client.component';
import { MainComponent } from '../main/main.component';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent, ServicesComponent, StatisticsComponent,
    SystemComponent, PartnearComponent, OrderServiceComponent,
    ClientComponent, AfterSalesComponent, ContactUsComponent, MainComponent,
    BlogComponent
],
  templateUrl: './home.component.html',
  styleUrl: './hom.component.scss'
})
export class HomeComponent {

}
