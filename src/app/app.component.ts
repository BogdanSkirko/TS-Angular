import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {IUser} from "./models/user";
import {PostService} from "./services/post.service";
import {IPosts} from "./models/iposts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang';
  users: IUser[]
  posts: IPosts[]

  constructor(private userService: UserService, private postService: PostService) {
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  };

  getAllPosts() {
    this.postService.getPosts().subscribe(value => {
      this.posts = value
    })
  }
}
