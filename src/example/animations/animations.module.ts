import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';
import {SharedModule} from '../../app/shared/shared.module';


@NgModule({
  declarations: [AnimationsComponent],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    SharedModule,
  ]
})
export class AnimationsModule { }
