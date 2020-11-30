import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // users:IUser[]=[
    //     { id:1, name:'Ajith Kumar', email:'ajith@gmail.com', dateOfBirth:new Date(1980, 9, 21), accountBalance:32000, gender:'M'},
    //     { id:2, name:'Sagar Jain', email:'sagar@gmail.com', dateOfBirth:new Date(1967, 5, 11), accountBalance:28000, gender:'M'},
    //     { id:3, name:'Mahesh Shinde', email:'maheshshinde@gmail.com', dateOfBirth:new Date(1976,11, 13), accountBalance:65000, gender:'M'},
    //     { id:4, name:'Ajay Khankhoje', email:'ajay@gmail.com', dateOfBirth:new Date(1982, 9, 22), accountBalance:54000, gender:'M'},
    //     { id:5, name:'Ashvini Shahane', email:'ashvini@gmail.com', dateOfBirth:new Date(1989, 9, 21), accountBalance:12000, gender:'F'},
    // ];

    private baseUrl:string ="http://localhost:3000/users";

    constructor(private http:HttpClient) { }

    getName(): string {
        return "Sonu Sathyadas";
    }

    getUser(id:number):Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    getUsers():Observable<IUser[]>{
        return this.http.get<IUser[]>(this.baseUrl);
    }

    addUser(user:IUser){
        return this.http.post<any>(this.baseUrl, user)
    }
}
