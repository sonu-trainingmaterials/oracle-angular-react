import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loginInvalid: boolean;

    constructor(private authSvc: AuthService) {
        this.form = new FormGroup({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.authSvc.login(this.form.value, '/customers/dashboard')
            .subscribe(
                res=>{ },
                err=>{ console.log(err)}
            )
    }
}
