import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/iUser";
import {IPosts} from "../models/iPost";

@Injectable({
  providedIn: 'root'
})
export class UsersAndPostsService {
private _url = 'https://jsonplaceholder.typicode.com/'
  constructor(private httpClient:HttpClient) {

  }
  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>( this._url + 'users')
  }
  gePosts(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(this._url+ 'posts')
  }
  getUsersById(id:number): Observable<IUser> {
  return this.httpClient.get<IUser>(this._url + '/' + id)
  }
  getPostsById(id:number): Observable<IPosts> {
  return this.httpClient.get<IPosts>(this._url +'/' + id)
  }
}
