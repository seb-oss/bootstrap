import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputGroupComponent } from './input-group.component';

const routes: Routes = [{ path: '', component: InputGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputGroupRoutingModule { }
