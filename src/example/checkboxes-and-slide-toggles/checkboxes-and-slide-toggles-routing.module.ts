import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxesAndSlideTogglesComponent } from './checkboxes-and-slide-toggles.component';

const routes: Routes = [{ path: '', component: CheckboxesAndSlideTogglesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxesAndSlideTogglesRoutingModule { }
