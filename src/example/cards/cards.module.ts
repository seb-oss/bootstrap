import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { WithGridComponent } from './with-grid/with-grid.component';
import { ColumnsComponent } from './columns/columns.component';


@NgModule({
  declarations: [CardsComponent, StandardComponent, WithGridComponent, ColumnsComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,
  ]
})
export class CardsModule { }
