import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AccordionComponent, StandardComponent],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    NgbAccordionModule,
    SharedModule,
  ]
})
export class AccordionModule { }
