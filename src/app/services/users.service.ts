import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../imodels/iuser";

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(private httpClient: HttpClient) {
  }
  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
  getAllUsers(id:number): Observable<IUser>{
    return this.httpClient.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
  }
}

