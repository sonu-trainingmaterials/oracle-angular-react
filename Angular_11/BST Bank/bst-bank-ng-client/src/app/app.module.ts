import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AppConfig, APP_CONFIG } from './app.config';
import { AuthService } from './customers/services/auth.service';
import { AuthHeaderInterceptor } from './interceptors/auth-header.interceptor';

export function auth_check(authSvc:AuthService){
    return ()=> authSvc.checkAuthenticated();
}
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FeedbackComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,        
    ],
    providers: [
        { provide: APP_CONFIG, useValue: AppConfig, multi:false },
        AuthService,
        { provide: APP_INITIALIZER, useFactory:auth_check, deps:[AuthService], multi:true},
        { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi:true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
