import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeComponent } from './badge.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { DismissableComponent } from './dismissable/dismissable.component';
import { ExamplesComponent } from './examples/examples.component';


@NgModule({
  declarations: [BadgeComponent, StandardComponent, DismissableComponent, ExamplesComponent],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    SharedModule
  ]
})
export class BadgeModule { }
