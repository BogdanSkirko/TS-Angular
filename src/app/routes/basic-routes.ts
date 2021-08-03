import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";


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

