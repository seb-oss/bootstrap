import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsComponent } from './modals.component';
import {SharedModule} from '../../app/shared/shared.module';
import {StandardComponent} from './standard/standard.component';
import { AsideComponent } from './aside/aside.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SizesComponent } from './sizes/sizes.component';
import { ScrollComponent } from './scroll/scroll.component';


@NgModule({
  declarations: [ModalsComponent, StandardComponent, AsideComponent, FullscreenComponent, SizesComponent, ScrollComponent],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    SharedModule,
  ]
})
export class ModalsModule { }
