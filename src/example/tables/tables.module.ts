import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { StripedComponent } from './striped/striped.component';
import { BorderedComponent } from './bordered/bordered.component';
import { HoverableComponent } from './hoverable/hoverable.component';
import { SmallComponent } from './small/small.component';
import { ExpandedComponent } from './expanded/expanded.component';
import { SortComponent } from './sort/sort.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';


@NgModule({
  declarations: [TablesComponent, StandardComponent, StripedComponent, BorderedComponent, HoverableComponent, SmallComponent, ExpandedComponent, SortComponent, HorizontalScrollComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
  ]
})
export class TablesModule { }
