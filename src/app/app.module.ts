import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/Startup/navbar/navbar.component';
import { HomeComponent } from './Component/Startup/home/home.component';
import { AboutAyushComponent } from './Component/Startup/about-ayush/about-ayush.component';
import { CareerComponent } from './Component/Startup/career/career.component';
import { ProjectComponent } from './Component/Startup/project/project.component';
import { TechnologyComponent } from './Component/technology/technology.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './Component/Startup/loader/loader.component';
import { CommonModalComponent } from './Component/On-Demand/common-modal/common-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './Shared/Service/http-interceptor.service';
import { UpperCasePipe } from './upper-case.pipe';
import { TextHightlightDirective } from './text-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutAyushComponent,
    CareerComponent,
    ProjectComponent,
    TechnologyComponent,
    LoaderComponent,
    CommonModalComponent,
    UpperCasePipe,
    TextHightlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    BsModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
