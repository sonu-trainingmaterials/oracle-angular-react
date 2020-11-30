import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfile } from 'src/app/models/IProfile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

    profile: IProfile;
    @ViewChild('frm') form: NgForm;

    constructor(private route: ActivatedRoute, private svc: ProfileService, private router: Router) {

        let data = this.route.snapshot.data["profile"];
        this.profile = {
            name: data.name,
            email: data.email,
            phonenumber: data.phonenumber,
            photo: data.photo,
            sex: data.sex,
            birthdate: data.birthdate,
            address: data.address,
            city: data.city,
            country: data.country
        }
    }

    public get Dirty(): boolean {
        return this.form.dirty;
    }

    ngOnInit(): void {
    }

    update(frm) {
        if (frm.valid) {
            this.svc.updateProfile(this.profile)
                .subscribe(
                    res => {
                        alert("Updated");
                        this.router.navigate(['/'])
                    },
                    err => alert("Failed to update")
                )
            alert("updated");
        } else {
            alert("Invalid data")
        }
    }

}
