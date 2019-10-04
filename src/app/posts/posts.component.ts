import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];
  searchTerm = '';
  dataURL = 'http://localhost:3208/posts.json';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.posts = await this.httpClient.get(this.dataURL).toPromise();
    this.posts = this.posts.posts;
  }
}
