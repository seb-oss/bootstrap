import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';


@NgModule({
  declarations: [ToastComponent, StandardComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    SharedModule,
  ]
})
export class ToastModule { }
