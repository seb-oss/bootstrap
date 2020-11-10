import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinnerComponent } from './spinner.component';

const routes: Routes = [{ path: '', component: SpinnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinnerRoutingModule { }
