import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class HeaderInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        return next.handle(request);
    }
    
}