import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUserModel [] = [
  {
    name : 'Mattia',
    surname : 'Parisi',
    email : 'mattiaparisi@gmail.com',
    id : 0
  },
  {
    name : 'Alessia',
    surname : 'Ciccarello',
    email : 'alessiaciccarello@gmail.com',
    id : 1
  },
  {
    name : 'Ciccio',
    surname : 'Belo',
    email : 'cicciobelo@gmail.com',
    id : 2
  },
  {
    name : 'Santo',
    surname : 'Terranova',
    email : 'santoterranova@gmail.com',
    id : 3
  },
  {
    name : 'Damiano',
    surname : 'Pulvirenti',
    email : 'damianopulvirenti@gmail.com',
    id : 4
  },
  {
    name : 'Enrico',
    surname : 'Bruno',
    email : 'enricobruno@gmail.com',
    id : 5
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
