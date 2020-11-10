import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGroupComponent } from './list-group.component';

const routes: Routes = [{ path: '', component: ListGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGroupRoutingModule { }
