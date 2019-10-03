import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  dataAdded = false;
  post = {
    title: '',
    content: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onBtnClck() {
    this.postService.addPost({ ...this.post });
    this.post.title = '';
    this.post.content = '';
    this.dataAdded = true;
  }

}


