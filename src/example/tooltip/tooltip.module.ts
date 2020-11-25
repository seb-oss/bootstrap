import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { TableComponent } from './table/table.component';
import { InlineComponent } from './inline/inline.component';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [TooltipComponent, StandardComponent, TableComponent, InlineComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    SharedModule,
    NgbTooltipModule
  ]
})
export class TooltipModule { }
