import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurkeyRoutingModule } from './turkey-routing.module';
import { TurkeyComponent } from './turkey.component';


@NgModule({
  declarations: [TurkeyComponent],
  imports: [
    CommonModule,
    TurkeyRoutingModule
  ]
})
export class TurkeyModule { }
