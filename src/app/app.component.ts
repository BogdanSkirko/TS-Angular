import { Component } from '@angular/core';
import {UsersService} from "./services/users.service";
import {IUser} from "./imodels/iuser";
import {PostsService} from "./services/posts.service";
import {IPosts} from "./imodels/ipost";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang';
  users:IUser[];
  user:IUser;
  posts:IPosts[]
  constructor(private userService:UsersService,private postService: PostsService) {
  }
  getAllUsers() {
    this.userService.getUsers().subscribe(value => {
      this.users = value
      console.log(value)
    })
  }

  getAllPosts() {
    this.postService.getPosts().subscribe(value => {
      this.posts = value
    })

  }
}
