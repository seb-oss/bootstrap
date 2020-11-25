import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { StandardComponent } from './standard/standard.component';
import {SharedModule} from '../../app/shared/shared.module';
import { CloseComponent } from './close/close.component';
import { OutlinedComponent } from './outlined/outlined.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { SizesComponent } from './sizes/sizes.component';

@NgModule({
  declarations: [ButtonComponent, StandardComponent, CloseComponent, OutlinedComponent, GridComponent, IconsComponent, SizesComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule,
  ]
})
export class ButtonModule { }
