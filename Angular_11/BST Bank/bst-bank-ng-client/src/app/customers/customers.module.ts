import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from '../material.module';
import { AppConfig, APP_CONFIG } from '../app.config';
import { AccountTypePipe } from './pipes/account-type.pipe';


@NgModule({
    declarations: [
        CustomerDashboardComponent,
        LoginComponent,
        RegisterComponent,
        AccountTypePipe
    ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers:[
        { provide: APP_CONFIG, useValue: AppConfig },
    ]
})
export class CustomersModule { }
