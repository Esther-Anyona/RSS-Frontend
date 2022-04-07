import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileRegisterService {

  constructor(private http: HttpClient) { }
  profileUrl = 'http://localhost/api/profile';

  registeredProfile(userData: any):Observable<any> {
    return this.http.get(this.profileUrl + '/' + userData);
  }

}
