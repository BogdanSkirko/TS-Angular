import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

  }
  ngOnInit(): void {
  }

}