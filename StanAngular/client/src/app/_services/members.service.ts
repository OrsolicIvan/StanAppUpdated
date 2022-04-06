import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { Apartment } from '../_models/apartment';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user'))
  })
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getApartments(){
    return this.http.get<Apartment[]>(this.baseUrl + 'users/apartments', httpOptions);
  }
  
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
  }
  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username, httpOptions);
    
  }
  getApartmentsById(username : string)
  {
    return this.http.get<Apartment[]>(this.baseUrl + 'users/' + username, httpOptions);
  }
  
}

