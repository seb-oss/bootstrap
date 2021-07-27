import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ExampleRoutingModule} from './example-routing.module';
import {SharedModule} from '../app/shared/shared.module';
import {TypographyComponent} from "./components/typography/typography.component";
import {IconsComponent} from "./components/icons/icons.component";
import {ColorsComponent} from "./components/colors/colors.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ExampleRoutingModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    ColorsComponent,
    IconsComponent,
    TypographyComponent
  ],
  exports: []
})
export class ExampleModule { }
