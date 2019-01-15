import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MetroCityMumbaiComponent } from './home/metro-city-mumbai/metro-city-mumbai.component';
import { MetroCityDelhiComponent } from './home/metro-city-delhi/metro-city-delhi.component';
import { MetroCityKolkataComponent } from './home/metro-city-kolkata/metro-city-kolkata.component';
import { MetroCityBangaloreComponent } from './home/metro-city-bangalore/metro-city-bangalore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MetroCityMumbaiComponent,
    MetroCityDelhiComponent,
    MetroCityKolkataComponent,
    MetroCityBangaloreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
