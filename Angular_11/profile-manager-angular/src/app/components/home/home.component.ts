import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProfile } from 'src/app/models/IProfile';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    profiles: IProfile[]; //default value is undefined

    constructor(private svc: ProfileService) {
        
    }

    ngOnInit(): void {
        this.svc.getProfiles()
        .subscribe(
            res=>this.profiles = res,
            err=>this.profiles= []
        )
    }

    ngOnDestroy():void{
        console.log("Unloading Home component")
    }
}
