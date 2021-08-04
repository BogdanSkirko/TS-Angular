import {Component, OnInit} from '@angular/core';
import {UsersAndPostsService} from "../../services/users-and-posts.service";
import {IUser} from "../../models/iUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];


  constructor(private userAndPostService: UsersAndPostsService) {
  }

  ngOnInit(): void {
    this.userAndPostService.getUsers().subscribe(value => this.users = value)
  };


}
