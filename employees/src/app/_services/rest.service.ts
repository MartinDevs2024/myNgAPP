import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {
   baseUrl: string = 'http://uxdeve82-001-site6.itempurl.com/api/members';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
