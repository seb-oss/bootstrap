import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioButtonsComponent } from './radio-buttons.component';

const routes: Routes = [{ path: '', component: RadioButtonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioButtonsRoutingModule { }
