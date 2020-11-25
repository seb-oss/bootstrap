import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TooltipComponent } from './tooltip.component';

const routes: Routes = [{ path: '', component: TooltipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule { }
