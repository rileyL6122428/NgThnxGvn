import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurkeyRoutingModule } from './turkey-routing.module';
import { TurkeyComponent } from './turkey.component';
import { StoreModule } from '@ngrx/store';
import * as fromTurkey from './state/turkey.reducer';
import { TurkeyListComponent } from './components/turkey-list/turkey-list.component';

@NgModule({
  declarations: [TurkeyComponent, TurkeyListComponent],
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
