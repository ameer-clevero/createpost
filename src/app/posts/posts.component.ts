import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  searchTerm = '';
  dataURL = '';
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.posts = await this.postService.getData();
    this.posts = this.posts.posts;
  }


}
