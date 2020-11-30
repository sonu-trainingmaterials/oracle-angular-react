import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProfile } from 'src/app/models/IProfile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

    @Input() profile: IProfile;

    constructor(private svc: ProfileService) {
        //console.log("Ctor: Value of profile is ", this.profile);
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        //console.log("Card onchanges:", changes)
    }

    ngOnInit(): void {
        //console.log("OnInit: Value of profile is ", this.profile);
    }

}
