import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UsersPostsComponent} from "../components/users-posts/users-posts.component";
import {Routes} from "@angular/router";


export let routes:Routes = [
  {path: 'users', component: UsersComponent,
  children : [
    {
      path: ':id', component: UsersPostsComponent
    }]
  },

  {path: 'posts', component: PostsComponent}
]
