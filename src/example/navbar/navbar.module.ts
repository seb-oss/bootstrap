import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { LightComponent } from './light/light.component';
import { WhiteComponent } from './white/white.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [NavbarComponent, StandardComponent, LightComponent, WhiteComponent, SearchComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    SharedModule,
  ]
})
export class NavbarModule { }
