import { Component, OnInit } from '@angular/core';
import {Post} from "./Post";
import {SubSink} from "subsink";
import {ActivatedRoute} from "@angular/router";
import {Base} from "../classes/Base";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.css']
})
export class PagePostComponent implements OnInit {
  private subs: SubSink = new SubSink();
  post = new Post()

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.initPost();
    this.router.params.subscribe(
      params => this.post.id = params['post_id']
    )
    this.getPost();
  }

  initPost() {
    this.post.images = [];
  }

  getPost() {
    this.post.images.push('assets/posts/1.jpg');
    this.post.images.push('assets/posts/2.jpg');
  }


}
