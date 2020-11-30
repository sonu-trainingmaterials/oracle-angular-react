import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user:IUser|undefined=undefined;
    name:string;
    users:IUser[]=[];

    constructor(private userSvc: UserService) {
        this.name = this.userSvc.getName();
        //this.user= this.userSvc.getUser(4) as IUser;
        this.userSvc.getUsers()
            .subscribe(
                (res)=>{ this.users = res;},
                (err)=>{ console.log(err); }
            )
    }

    ngOnInit(): void {
       
    }

    show(obj:IUser){
        //alert("You clicked on " + obj.name);
        this.userSvc.getUser(obj.id)
            .subscribe(
                (res)=>{ this.user = res; },
                (err)=>{console.log(err)}
            )
    }

}
