import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeComponent } from './badge.component';

const routes: Routes = [{ path: '', component: BadgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeRoutingModule { }
