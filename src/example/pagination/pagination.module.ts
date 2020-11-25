import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { SizesComponent } from './sizes/sizes.component';
import { ResponsiveComponent } from './responsive/responsive.component';


@NgModule({
  declarations: [PaginationComponent, StandardComponent, SizesComponent, ResponsiveComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    SharedModule,
  ]
})
export class PaginationModule { }
