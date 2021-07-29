import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";

export let routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', redirectTo: ''},
  {path: 'users/:id', component: UserDetailsComponent}
]
