import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
