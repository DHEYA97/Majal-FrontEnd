import { Component } from '@angular/core';
import { SharedModuelModule } from '../../shared/shared-moduel/shared-moduel.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModuelModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
email:string = "info@majal.com";
year:number = new Date().getFullYear();
}
