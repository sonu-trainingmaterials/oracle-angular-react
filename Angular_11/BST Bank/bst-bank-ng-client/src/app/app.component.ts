import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthInfo } from './customers/models/auth-info';
import { AuthService } from './customers/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent {
    title = 'BST Bank';
    isLoggedIn: boolean;
    authInfo:IAuthInfo;

    constructor(private authSvc: AuthService) {
        this.authSvc.IsLoggedIn
        .subscribe(
            res=>{
                this.isLoggedIn= res;
                if(res){
                    this.authInfo = this.authSvc.getAuthInfo();
                }
            }
        )
    }

    logout(){
        this.authSvc.logout('/')
    }
}
