import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurkeyRoutingModule } from './turkey-routing.module';
import { TurkeyComponent } from './turkey.component';
import { StoreModule } from '@ngrx/store';
import * as fromTurkey from './state/turkey.reducer';
import { TurkeyListComponent } from './components/turkey-list/turkey-list.component';
import { TurkeyFormComponent } from './components/turkey-form/turkey-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TurkeyEditorComponent } from './components/turkey-editor/turkey-editor.component';

@NgModule({
  declarations: [TurkeyComponent, TurkeyListComponent, TurkeyFormComponent, TurkeyEditorComponent],
  imports: [
    CommonModule,
    TurkeyRoutingModule,
    StoreModule.forFeature(
      fromTurkey.turkeyFeatureKey,
      fromTurkey.turkeyReducer
    ),
    ReactiveFormsModule
  ]
})
export class TurkeyModule { }
