import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurkeyComponent } from './turkey.component';

const routes: Routes = [{ path: '', component: TurkeyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurkeyRoutingModule { }
