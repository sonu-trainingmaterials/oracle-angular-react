import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [ //components, directives, pipes registration
    AppComponent, HomeComponent, AboutComponent, LoginComponent, NavigationComponent
  ],
  imports: [ //Importing built-in modules and third-party modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      //registering DI services
  ],
  bootstrap: [AppComponent] //The root component of the application
})
export class AppModule { }
