import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  private apiUrl = `${BaseUrl}/userLogin`;

  login(loginData: { userEmail: string, userPassword: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);  // Send the loginData object directly to the API
  }
}
