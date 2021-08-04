import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/iUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getUserDetails() {
    this.router.navigate(['users',this.user.id], {state: this.user}
  )

  }
}
