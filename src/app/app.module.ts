import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxSpinnerModule,
        NgOptimizedImage,
        FormsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BsDropdownModule
    ], providers: [
        BsModalService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
