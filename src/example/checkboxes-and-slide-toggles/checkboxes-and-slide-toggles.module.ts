import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxesAndSlideTogglesRoutingModule } from './checkboxes-and-slide-toggles-routing.module';
import { CheckboxesAndSlideTogglesComponent } from './checkboxes-and-slide-toggles.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { HighlightErrorComponent } from './highlight-error/highlight-error.component';


@NgModule({
  declarations: [CheckboxesAndSlideTogglesComponent, StandardComponent, HorizontalComponent, SlideToggleComponent, HighlightErrorComponent],
  imports: [
    CommonModule,
    CheckboxesAndSlideTogglesRoutingModule,
    SharedModule,
  ]
})
export class CheckboxesAndSlideTogglesModule { }
