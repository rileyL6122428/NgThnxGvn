import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurkeyRoutingModule } from './turkey-routing.module';
import { TurkeyComponent } from './turkey.component';
import { StoreModule } from '@ngrx/store';
import * as fromTurkey from './state/turkey.reducer';

@NgModule({
  declarations: [TurkeyComponent],
  imports: [
    CommonModule,
    TurkeyRoutingModule,
    StoreModule.forFeature(
      fromTurkey.turkeyFeatureKey,
      fromTurkey.turkeyReducer
    )
  ]
})
export class TurkeyModule { }
