import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../models/Posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) {
  }
  getPosts():Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
