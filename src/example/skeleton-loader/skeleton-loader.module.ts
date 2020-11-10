import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonLoaderRoutingModule } from './skeleton-loader-routing.module';
import { SkeletonLoaderComponent } from './skeleton-loader.component';
import {SharedModule} from '../../app/shared/shared.module';
import {StandardComponent} from './standard/standard.component';
import { ListComponent } from './list/list.component';
import { FillComponent } from './fill/fill.component';
import { SmallComponent } from './small/small.component';
import { FullComponent } from './full/full.component';
import { TableComponent } from './table/table.component';
import { DelayComponent } from './delay/delay.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { MatchComponent } from './match/match.component';
import { BackgroundComponent } from './background/background.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SkeletonLoaderComponent, StandardComponent, ListComponent, FillComponent, SmallComponent, FullComponent, TableComponent, DelayComponent, AdvancedComponent, FormComponent, CardsComponent, MatchComponent, BackgroundComponent],
  imports: [
    CommonModule,
    SkeletonLoaderRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class SkeletonLoaderModule { }
