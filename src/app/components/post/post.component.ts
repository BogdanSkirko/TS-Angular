import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../imodels/ipost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  postsDetails(): void {
    this.router.navigate(['posts',this.post.id], {relativeTo: this.activatedRoute})
  }
}
