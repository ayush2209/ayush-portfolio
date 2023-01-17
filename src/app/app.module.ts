import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/Startup/navbar/navbar.component';
import { HomeComponent } from './Component/Startup/home/home.component';
import { AboutAyushComponent } from './Component/Startup/about-ayush/about-ayush.component';
import { CareerComponent } from './Component/Startup/career/career.component';
import { ProjectComponent } from './Component/Startup/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutAyushComponent,
    CareerComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
