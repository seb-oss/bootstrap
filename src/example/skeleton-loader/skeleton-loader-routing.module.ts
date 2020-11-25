import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonLoaderComponent } from './skeleton-loader.component';

const routes: Routes = [{ path: '', component: SkeletonLoaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonLoaderRoutingModule { }
