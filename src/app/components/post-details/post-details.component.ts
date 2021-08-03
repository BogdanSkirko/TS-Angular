import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../imodels/ipost";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPosts;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getAllPosts(id).subscribe(value => {
        this.post = value
      })
    })
  }

  ngOnInit(): void {
  }

}
