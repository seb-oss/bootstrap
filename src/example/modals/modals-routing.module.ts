import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsComponent } from './modals.component';

const routes: Routes = [{ path: '', component: ModalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
