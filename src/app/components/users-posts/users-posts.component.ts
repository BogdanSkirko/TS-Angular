import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {
  user:IUser
  constructor(private activatedroute:ActivatedRoute,private usersService:UserService) {
    this.activatedroute.params.subscribe(({id}) => {
      this.usersService.getUsersById(id).subscribe(value => this.user = value)

    });
  }
   ngOnInit(): void {}
}
