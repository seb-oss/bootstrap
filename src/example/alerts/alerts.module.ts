import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { IconsComponent } from './icons/icons.component';
import { LinksComponent } from './links/links.component';
import { ResponsiveWithButtonsComponent } from './responsive-with-buttons/responsive-with-buttons.component';
import { DismissableComponent } from './dismissable/dismissable.component';


@NgModule({
  declarations: [AlertsComponent, StandardComponent, IconsComponent, LinksComponent, ResponsiveWithButtonsComponent, DismissableComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    SharedModule,
  ]
})
export class AlertsModule { }
