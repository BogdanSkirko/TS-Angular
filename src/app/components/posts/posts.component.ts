import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../models/iPost";
import {UsersAndPostsService} from "../../services/users-and-posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPosts[];
  constructor(private userAndPostService:UsersAndPostsService) { }

  ngOnInit(): void {
     this.userAndPostService.gePosts().subscribe(value => this.posts = value)
  }

}
