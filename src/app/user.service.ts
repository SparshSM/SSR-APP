import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  getusers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
        .pipe(map(item => item));
}
  getposts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(map(item => item));
}
}
