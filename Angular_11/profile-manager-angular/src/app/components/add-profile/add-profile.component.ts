import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'add-profile',
    templateUrl: './add-profile.component.html',
    styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

    frm: FormGroup;

    constructor(private svc:ProfileService, 
        private router:Router) {
        this.frm = new FormGroup({
            name: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
            email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
            sex: new FormControl("M", Validators.required),
            birthdate: new FormControl("", Validators.required),
            phonenumber: new FormControl("", Validators.required),
            address: new FormControl("", Validators.required),
            city: new FormControl("", Validators.required),
            country: new FormControl("India", Validators.required),
            photo: new FormControl(""),
        })
    }

    public get Name(): AbstractControl {
        return this.frm.controls['name'];
    }

    public get Email(): AbstractControl {
        return this.frm.controls['email'];
    }

    public get Sex(): AbstractControl {
        return this.frm.controls['sex'];
    }

    public get BirthDate(): AbstractControl {
        return this.frm.controls['birthdate'];
    }

    public get Phone(): AbstractControl {
        return this.frm.controls['phonenumber'];
    }

    public get Address(): AbstractControl {
        return this.frm.controls['address'];
    }

    public get City(): AbstractControl {
        return this.frm.controls['city'];
    }

    public get Country(): AbstractControl {
        return this.frm.controls['country'];
    }

    public get Photo(): AbstractControl {
        return this.frm.controls['photo'];
    }

    public get Dirty():boolean{
        return this.frm.dirty;
    }

    ngOnInit(): void {
    }

    save(){
        if(this.frm.valid){
            this.svc.addProfile(this.frm.value)
            .subscribe(
                res=>{
                    alert("Added ");
                    this.router.navigate(['/'])
                },
                err=>alert("Failed to add profile")
            );
            
        }else{
            alert("Invalid form data, some validation error exists");
        }
    }

}
