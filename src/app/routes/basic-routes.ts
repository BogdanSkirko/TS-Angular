import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";



export let routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  },
  // {
  //   path: 'users/:id',
  //   component: UserDetailsComponent
  // },
  {
    path: 'posts',
    component: PostsComponent
  }
]
