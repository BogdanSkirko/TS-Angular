import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {PostDetailsComponent} from "../post-details/post-details.component";


export let routes = [
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
]

