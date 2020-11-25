import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonGroupComponent } from './button-group.component';

const routes: Routes = [{ path: '', component: ButtonGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonGroupRoutingModule { }
