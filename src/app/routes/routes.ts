import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UsersWithPostsComponent} from "../components/users-with-posts/users-with-posts.component";
import {Routes} from "@angular/router";

export let routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id', component: UsersWithPostsComponent}
    ]
  },
  // {path: 'users/:id', component: UsersWithPostsComponent},
  {path: 'posts', component: PostsComponent}
]
