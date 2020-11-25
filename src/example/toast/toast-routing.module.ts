import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastComponent } from './toast.component';

const routes: Routes = [{ path: '', component: ToastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToastRoutingModule { }
