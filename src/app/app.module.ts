import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleModule } from '../example/example.module';
import { AppRoutingModule } from './app-routing.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MobileNavigationComponent } from './components/mobile-navigation/mobile-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    MobileNavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
