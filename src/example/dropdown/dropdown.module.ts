import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import {SharedModule} from '../../app/shared/shared.module';
import {StandardComponent} from './standard/standard.component';
import { AngularComponent } from './angular/angular.component';


@NgModule({
  declarations: [DropdownComponent, StandardComponent, AngularComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule,
    SharedModule,
  ]
})
export class DropdownModule { }
