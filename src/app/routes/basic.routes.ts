import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {PostsDetailsComponent} from "../components/posts-details/posts-details.component";

export let routes: Routes = [

  {path: 'users', redirectTo: ''},
  {path: 'post/:id', component: PostsDetailsComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'posts', redirectTo: ''}

]
