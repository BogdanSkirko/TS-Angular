import {Component, OnInit} from '@angular/core';
import {IUser} from "../../imodels/iuser";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser

  constructor(private activaterdRoute: ActivatedRoute, private userService: UsersService) {
    this.activaterdRoute.params.subscribe(({id}) => {
      this.userService.getAllUsers(id).subscribe(value => {
        this.user = value
      })
    })
  }

  ngOnInit(): void {
  }

}
