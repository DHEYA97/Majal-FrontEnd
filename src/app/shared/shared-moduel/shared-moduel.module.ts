import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { EmptyComponent } from './Component/empty/empty.component';

const modeuls = [
  CommonModule,
  ]
  const components = [
  EmptyComponent
  ]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modeuls
  ],
  exports:[
    ...modeuls,...components
  ]
})
export class SharedModuelModule { }
