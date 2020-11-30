import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PROFILES } from '../data/inmemory-data';
import { IProfile } from '../models/IProfile';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {  

    readonly baseUrl:string="http://localhost:3000/profiles";

    constructor(private http:HttpClient) { }

    getProfiles():Observable<IProfile[]>{
        return this.http.get<IProfile[]>(this.baseUrl);
    }

    getProfileById(id:number):Observable<IProfile>{
        return this.http.get<IProfile>(`${this.baseUrl}/${id}`)
    }

    addProfile(profile:IProfile):Observable<IProfile>{
        return this.http.post<IProfile>(this.baseUrl,profile);
    }

    updateProfile(profile:IProfile):Observable<IProfile>{
        return this.http.put<IProfile>(`${this.baseUrl}/${profile.id}`,profile);
    }
}
