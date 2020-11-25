import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGroupRoutingModule } from './list-group-routing.module';
import { ListGroupComponent } from './list-group.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { BulletComponent } from './bullet/bullet.component';
import { CheckComponent } from './check/check.component';
import { OrderedComponent } from './ordered/ordered.component';
import { StatesComponent } from './states/states.component';
import { ActionsComponent } from './actions/actions.component';


@NgModule({
  declarations: [ListGroupComponent, StandardComponent, BulletComponent, CheckComponent, OrderedComponent, StatesComponent, ActionsComponent],
  imports: [
    CommonModule,
    ListGroupRoutingModule,
    SharedModule,
  ]
})
export class ListGroupModule { }
