import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/iposts";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  goToDetailsPost() : void {
    this.router.navigate(['posts',this.post.id],{state:this.post})
    console.log(this.router.url)
  }
}
