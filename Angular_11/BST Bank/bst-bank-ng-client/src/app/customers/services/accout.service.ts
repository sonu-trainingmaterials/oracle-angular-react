import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';
import { ICustomer } from '../models/customer-model';
import { AuthService } from './auth.service';


@Injectable({
    providedIn:'root'
})
export class AccountService{

    constructor(private http:HttpClient, 
        private authSvc:AuthService,
        @Inject(APP_CONFIG)private config:IAppConfig) {
        
    }

    getCustomerInfo():Observable<ICustomer>{
        let authInfo = this.authSvc.getAuthInfo();        
        if(authInfo){
            let url= `${this.config.apiBaseUrl}/api/Customer/${authInfo.id}`;
            return this.http.get<ICustomer>(url);
        }else{
            return EMPTY;
        }
    }
}