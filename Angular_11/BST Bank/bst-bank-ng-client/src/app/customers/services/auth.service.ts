import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';
import { IAuthInfo } from '../models/auth-info';
import { Login } from '../models/login.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient,
        private router: Router,
        @Inject(APP_CONFIG) private config: IAppConfig) {
            
         }

    login(credentials: Login, redirectUrl?:string): Observable<IAuthInfo> {
        return this.http.post<any>(`${this.config.apiBaseUrl}/api/auth/login`, credentials)
            .pipe(
                map(resp => {
                    let authInfo: IAuthInfo = {
                        userName: resp.userName,
                        lastName: resp.lastName,
                        firstName: resp.firstName,
                        auth_token: resp.auth_token,
                        id: resp.id
                    };
                    let authInfoStr = JSON.stringify(authInfo);
                    sessionStorage.setItem("auth_info", authInfoStr);
                    this.isAuthenticated.next(true);
                    if(redirectUrl)
                        this.router.navigate([redirectUrl])
                    return authInfo;
                })            
            );
    }

    logout(redirectUrl?: string) {
        sessionStorage.clear();
        this.isAuthenticated.next(false);
        if (redirectUrl)
            this.router.navigate([redirectUrl]);
    }

    get IsLoggedIn():Observable<boolean>{
        return this.isAuthenticated.asObservable();
    }

    getAuthInfo(): IAuthInfo {
        try {
            let authInfoStr = sessionStorage.getItem("auth_info");
            return JSON.parse(authInfoStr) as IAuthInfo;
        } catch (err) {
            return undefined;
        }
    }

    //execute on app init to check whether user is already logged in or not, must return promise
    checkAuthenticated(){
        return new Promise((resolve,reject)=>{
            try {
                let authInfoStr = sessionStorage.getItem("auth_info");
                let authInfo = JSON.parse(authInfoStr) as IAuthInfo;
                if(authInfo)
                    this.isAuthenticated.next(true);
                else
                    this.isAuthenticated.next(false);
            } catch (err) {
                this.isAuthenticated.next(false);
                return undefined;
            }
            resolve(true);
        })
        
    }
}
