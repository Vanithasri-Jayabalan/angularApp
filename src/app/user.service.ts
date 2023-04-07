import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url = 'https://jsonplaceholder.typicode.com/users'

  getUsers(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(res => res)
    );
  }

public getData(){
  const fakeData = new Observable((observer) => {
    setTimeout(() => {
      observer.next();
      observer.complete();
    }, 30000);
  });
  return fakeData;
}
}

// const myPromise = new Promise<string>((resolve, rejects) => {
//   //logic here
//   //If logic fails rejects will happen
//   rejects("error");
//   resolve("Your ans")
// })
