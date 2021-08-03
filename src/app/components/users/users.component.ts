import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../imodels/iuser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  @Input()
  user: IUser;
  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value
      }
    )
  }

}
