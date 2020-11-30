import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AuthService {

    validate(username:string, password:string):Observable<boolean>{
        if(username === "admin" && password==="admin"){
            return of(true);
        }else{
            return of(false);
        }
    }
}