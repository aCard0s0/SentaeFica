import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

import { NgwWowModule } from 'ngx-wow';
import { NguCarouselModule } from '@ngu/carousel';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule,
    SlideshowModule,
    NgwWowModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
