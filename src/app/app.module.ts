import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/Startup/navbar/navbar.component';
import { HomeComponent } from './Component/Startup/home/home.component';
import { AboutAyushComponent } from './Component/Startup/about-ayush/about-ayush.component';
import { CareerComponent } from './Component/Startup/career/career.component';
import { ProjectComponent } from './Component/Startup/project/project.component';
import { TechnologyComponent } from './Component/technology/technology.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutAyushComponent,
    CareerComponent,
    ProjectComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
