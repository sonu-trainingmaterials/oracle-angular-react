import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../customers/services/auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthHeaderInterceptor implements HttpInterceptor{
    
    constructor(private authSvc:AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authInfo = this.authSvc.getAuthInfo();
        if(authInfo){
            let request = req.clone({
                setHeaders:{
                    "Authorization":`Bearer ${authInfo.auth_token}`
                }
            });
            return next.handle(request);
        }else{
            return next.handle(req);
        }
    }
}