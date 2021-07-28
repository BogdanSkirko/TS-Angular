import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {IUser} from "../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: IUser[];

  constructor(private userServices : UserService) {

  }

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(value => this.users=value)
  }

}
