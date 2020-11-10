import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { ContrastComponent } from './contrast/contrast.component';


@NgModule({
  declarations: [BreadcrumbsComponent, StandardComponent, ContrastComponent],
  imports: [
    CommonModule,
    BreadcrumbsRoutingModule,
    SharedModule,
  ]
})
export class BreadcrumbsModule { }
