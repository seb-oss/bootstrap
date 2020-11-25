import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';


@NgModule({
  declarations: [TabsComponent, StandardComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    SharedModule,
  ]
})
export class TabsModule { }
