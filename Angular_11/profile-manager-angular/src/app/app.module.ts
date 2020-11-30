import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { ImagePipe } from './pipes/image.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CardComponent,
    ImagePipe,
    AddProfileComponent,
    EditProfileComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      { provide:HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
