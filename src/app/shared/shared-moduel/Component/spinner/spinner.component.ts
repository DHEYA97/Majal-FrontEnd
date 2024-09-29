import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../../../Core/Service/loader.service';
import { SharedModuelModule } from '../../shared-moduel.module';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [SharedModuelModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) { }
}
